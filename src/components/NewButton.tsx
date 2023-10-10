"use client";
import { FloatButton } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  path: string;
};
const NewButton = ({ path }: Props) => {
  const router = useRouter();
  const { status } = useSession();
  return (
    <>
      {status !== "unauthenticated" && (
        <FloatButton
          onClick={() => router.push(`/${path}/new`, { scroll: false })}
          type="primary"
          style={{ top: 14, right: 14 }}
          icon={<i className="fa-solid fa-plus" />}
        />
      )}
    </>
  );
};

export default NewButton;
