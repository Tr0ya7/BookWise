import NextAuth, { User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { db } from "./database/drizzle"
import { users } from "./database/schema"
import { eq } from "drizzle-orm"
import { compare } from "bcryptjs"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null

                const user = await db.select().from(users).where(eq(users.email, credentials.email.toString())).limit(1) // eq = equal or equal to ...
                const isPasswordValid = await compare(credentials.password.toString(), user[0].password)
                const userFound = user[0] // maybe use user. instead of user[0].

                if (!isPasswordValid) return null

                return { id: userFound.id.toString(), email: userFound.email, name: userFound.fullName } as User
            }
        })
    ],
    pages: { signIn: "/sign-in" },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.name = user.name
            }

            return token
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
                session.user.name = token.name as string
            }

            return session
        }
    }
})