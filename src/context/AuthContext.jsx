"use client"

import { createContext, useContext } from "react"
import { useRouter } from "next/navigation"
import { createAuthClient } from "better-auth/react"

const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL 
    || "http://localhost:3000",
})

const { signIn, signOut, signUp, useSession } = authClient

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const router = useRouter()
  const { data: session, isPending: loading } = useSession()

  const user = session?.user
    ? {
        name: session.user.name ||
              session.user.email.split("@")[0],
        email: session.user.email,
        photo: session.user.image || null,
        initials: (
          session.user.name || session.user.email
        )[0].toUpperCase(),
        uid: session.user.id,
      }
    : null

  const registerWithEmail = async (name, email, password) => {
    const result = await signUp.email({
      name,
      email,
      password,
    })
    if (result.error) throw new Error(result.error.message)
    return result
  }

  const loginWithEmail = async (email, password) => {
    const result = await signIn.email({
      email,
      password,
    })
    if (result.error) throw new Error(result.error.message)
    return result
  }

  const loginWithGoogle = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    })
  }

  const logout = async () => {
    await signOut()
    router.push("/")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        registerWithEmail,
        loginWithEmail,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider")
  }
  return context
}
