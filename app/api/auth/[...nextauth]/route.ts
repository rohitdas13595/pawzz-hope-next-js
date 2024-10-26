import { settings } from "@/lib/settings";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  events: {
    async signIn(message) { /* on successful sign in */ 

      const { user } = message;
      console.log("from  router   handler -signIn",user);
    },
    async signOut(message) { /* on signout */
      console.log("from  router   handler -signOut",message);
     },
    async createUser(message) { 
      const { user } = message;
      console.log("from  router   handler -createUser",user);
    },
    async updateUser(message) { /* user updated - e.g. their email was verified */ 
      console.log("from  router   handler -updateUser",message);
    },
    async linkAccount(message) { /* account (e.g. Twitter) linked to a user */
      console.log("from  router   handler -linkAccount",message);
     },
    async session(message) { /* session is active */ 
      console.log("from  router   handler -session",message);
    },
  },
  providers: [
   GoogleProvider({
    clientId:settings.googleClientId,
    clientSecret: settings.googleClientSecret
   })
  ],
}

const  handler  =  NextAuth(authOptions);

export { handler as GET, handler as POST }