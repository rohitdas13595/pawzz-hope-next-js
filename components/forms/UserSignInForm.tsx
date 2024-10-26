"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { Form } from "@/components/ui/form";
import { SubmitButton } from "./SubmitButton";
import { AdminLoginFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { registerPatient } from "@/lib/actions/patient.actions";
import { GenderTypes, IdentificationTypes } from "@/constants";
import Image from "next/image";
import { CustomFormField, FormFieldType } from "./CustomFormField";
import { getDoctorsWithoutPagination } from "@/lib/actions/doctor.actions";
import { useQuery } from "@tanstack/react-query";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitials } from "@/lib/utils";
import { createAdmin } from "@/lib/actions/admin.action";
import { toast } from "sonner";
import { SessionProvider } from "next-auth/react";
import { Button } from "../ui/button";
import { GoogleSignInButton } from "./GoogleSignInButton";

export function UserSignInForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof AdminLoginFormValidation>>({
    resolver: zodResolver(AdminLoginFormValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback(
    async (values: z.infer<typeof AdminLoginFormValidation>) => {
      setIsLoading(true);
      console.log("values", values);
      try {
        const result = await createAdmin(values.email, values.password);
        console.log("values 1", result);
        if (!result) {
          toast.error("Error Signing In!");
        }
      } catch (error) {
        console.error("error", error);
      }

      setIsLoading(false);
    },
    []
  );

  // const { data: doctors } = useQuery({
  //   queryKey: ["doctors"],
  //   queryFn: async () => await getDoctorsWithoutPagination(),
  //   enabled: true,
  //   staleTime: 1000,
  // });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="mb-12 space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="tesxt-dark-700">Hope you are doing great!</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">Login Information</h2>

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="email"
            label="Email"
            placeholder="Enter you registered email"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
            type="email"
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="password"
            type="password"
            label="Password"
            placeholder="Enter you password"
            iconSrc="/assets/icons/lock.svg"
            iconAlt="user"
          />
        </section>

        <SubmitButton type="submit" isLoading={isLoading}>
          Submit
        </SubmitButton>

        <br />
        <SessionProvider session={null}>
          <GoogleSignInButton />
        </SessionProvider>
      </form>
    </Form>
  );
}
