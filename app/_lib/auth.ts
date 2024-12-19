import { NextApiRequest } from 'next';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { User } from '../_types/user';

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
    }
  }
}

export const { auth, handlers: { GET, POST } } = NextAuth(authConfig)