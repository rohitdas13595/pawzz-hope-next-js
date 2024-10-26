


import { Provider } from "@/components/contexts/queryClient";
import { AdminLoginForm } from "@/components/forms/AdminLoginFrom";
import {
  getSession,
  readPatientIdFromCookie,
} from "@/lib/actions/patient.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Homepage() {
  return (
    <div className="flex  h-screen max-h-screen w-full">
      <section className="remove-scrollbar container my-auto">
        
      </section>
    </div>
  );
}
