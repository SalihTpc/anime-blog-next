"use client";
import Loading from "@/components/Loading";
import ProfileForm from "@/components/ProfileForm";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const page = () => {
  const { data: sesion, status } = useSession();
  return (
    <div>
      {status == "loading" ? (
        <Loading />
      ) : (
        <div>
          {status !== "unauthenticated" ? (
            <div className="flex items-center justify-around flex-col md:flex-row md:items-start">
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="m-0">{sesion?.user?.name}</p>
                <p className="m-0">{sesion?.user?.email}</p>
                {sesion?.user?.image && (
                  <Image
                    width={400}
                    height={400}
                    src={sesion?.user?.image}
                    alt="User Image"
                    className="rounded-full max-sm:h-60 max-sm:w-60"
                  />
                )}
              </div>
              {(!sesion?.user?.name || !sesion?.user?.image) && <ProfileForm />}
            </div>
          ) : (
            <p>unauthenticated</p>
          )}
        </div>
      )}
    </div>
  );
};

export default page;
