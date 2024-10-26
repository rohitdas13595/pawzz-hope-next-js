
import { Provider } from "@/components/contexts/queryClient";
import { AdminLoginForm } from "@/components/forms/AdminLoginFrom";
import {
  getSession,
  readPatientIdFromCookie,
} from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";


export default function AdminLoginPage(){

    return(
        <div className="flex  h-screen max-h-screen w-full">
        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[496px]">
            <Image
              src="/assets/icons/logo-icon.svg"
              alt="patient"
              width={1000}
              height={1000}
              className="mb-12 h-10 w-fit"
            />
            <Provider>
              <AdminLoginForm />
            </Provider>
            <Link href={"/"}  className="mt-12 text-xs">Not Admin! Return To Organization Page</Link>
            <div className="text-14-regular mt-20 flex justify-between">
              <p className="justify-items-end text-dark-600  xl:text-left">
                &copy; 2024 Pawzz Hope
              </p>
            </div>
          </div>
        </section>
        <Image
          src="/assets/images/onboarding-img.jpg"
          height={1000}
          width={1000}
          alt="patient"
          className="side-img max-w-[50%]"
        />
      </div>
    )
}

