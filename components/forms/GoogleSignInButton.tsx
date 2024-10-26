import { Button } from "../ui/button";
import { useSession, signIn, signOut } from "next-auth/react"

export function GoogleSignInButton() {
    const  {data: session} = useSession()
    console.log({
       session,
       signIn,
       signOut
   
    })
    return (
        <Button type="button" onClick={() => signIn()}>Sign In With Google</Button>
    )
}