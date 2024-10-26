"use server";

import { cookies } from "next/headers";
import { db } from "../db/connection";
import { Admin } from "../db/schema";
import { signToken } from "../jwt";
import { hashPassword, validatePassword } from "../scrypt";
import { eq } from "drizzle-orm";

export const createAdmin = async (email: string, password: string) => {
  try {
    const hashedPassword = hashPassword(password);

    const result = await db
      .insert(Admin)
      .values({ email, password: hashedPassword })
      .returning();

    const tokenSet = await setAdminTokens(result[0]);
    if (!tokenSet) {
      return null;
    }
    return result[0];
  } catch (error) {
    console.error("error creating admin", error);
    return null;
  }
};

export const signInAdmin = async (email: string, password: string) => {
  try {
    const result = await db.select().from(Admin).where(eq(Admin.email, email));
    if (!result || result.length === 0) {
      return null;
    }

    const isValid = await validatePassword(password, result[0].password);
    if (!isValid) {
      return null;
    }

    const tokenSet = await setAdminTokens(result[0]);
    if (!tokenSet) {
      return null;
    }
    
    return result[0];
  } catch (error) {
    console.error("error signing In admin", error);
    return null;
  }
};

export const setAdminTokens = async (admin: typeof Admin.$inferSelect) => {
  try {
    console.log("session.....................................", admin);
    const aa = await signToken(
      {
        adminId: String(admin.id),
        email: admin.email,
      },
      "3h"
    );

    //   const pr = await signToken(
    //     {
    //       sessionId: session.id,
    //       patientId: session.patientId,
    //       role: "patient",
    //     },
    //     "30d"
    //   );

    if (aa) {
      cookies().set("aa", aa, { path: "/", maxAge: 60 * 60 * 3 });
      // cookies().set("pr", pr, { path: "/", maxAge: 60 * 60 * 24 * 30 });
      return true;
    }

    return false;
  } catch (error) {
    // throw error;
    console.error("error setting patient cookies", error);
    return false;
  }
};
