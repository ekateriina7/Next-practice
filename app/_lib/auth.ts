import { NextApiRequest } from 'next';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { User } from '../_types/user';
import { createGuest, getGuest } from './data-service';

interface Auth {
  user?: User;
}

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    })
  ],
  callbacks: {
    authorized({ auth, request }: { auth: Auth; request: NextApiRequest }) {
      return !!auth?.user
    },
    async signIn({ user, account, profile }) {
      try {
        const existingUser = await getGuest(user.email);
        if (!existingUser) {
          await createGuest({ email: user.email, full_name: user.name })
        }
        return true
      } catch {
        return false
      }
    },
    async session({ session, user }) {

      const guest = await getGuest(session.user.email);
      if (guest) {
        session.user.guest_id = guest.id;
      }

      return session;
    }
  },
  pages: {
    signIn: '/login'
  }
}

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth(authConfig)