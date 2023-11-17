"use client";
import { FloatButton } from "antd";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import HeaderItem from "./HeaderItem";
import HeaderItemHome from "./HeaderItemHome";
import SessionController from "./SessionController";

const Header = ({ children }: { children: React.ReactNode }) => {
  const homeItem = {
    id: 1,
    path: "/",
    icon: "fa-duotone fa-house",
    title: "Home",
  };
  const items = [
    {
      id: 1,
      path: "/animes",
      icon: "fa-duotone fa-tv",
      title: "Anime",
    },
    {
      id: 2,
      path: "/categories",
      icon: "fa-duotone fa-rectangle-list",
      title: "Category",
    },
  ];

  const router = useRouter();
  const logoutHandler = async () => {
    signOut();
    router.push("/", { scroll: false });
  };
  return (
    <>
      <div className="w-full flex justify-center py-8 top-0 pointer-events-none fixed max-w-screen z-10">
        <div className="bg-black bg-opacity-5 backdrop-blur-md top-8 flex items-center rounded-full gap-1.5 p-1.5 sm:gap-2.5 sm:p-2.5 pointer-events-auto">
          <HeaderItemHome
            key={homeItem.id}
            icon={homeItem.icon}
            path={homeItem.path}
            title={homeItem.title}
          />
          {items.map((item) => (
            <HeaderItem
              key={item.id}
              icon={item.icon}
              path={item.path}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className="font-montserrat">
        <div className="sm:px-16 px-4 pt-32 ">
          <SessionController>
            <FloatButton.Group
              trigger="click"
              badge={{ dot: true }}
              type="primary"
              style={{ right: 14, bottom: 14 }}
              icon={<i className="fa-solid fa-user" />}
            >
              <FloatButton
                onClick={() => router.push("/profile", { scroll: false })}
                icon={<i className="fa-regular fa-address-card" />}
              />
              <FloatButton
                onClick={logoutHandler}
                icon={<i className="fa-solid fa-right-from-bracket" />}
              />
            </FloatButton.Group>
          </SessionController>
          <FloatButton.BackTop style={{ right: 64, bottom: 14 }} />
          {children}
        </div>
      </div>
    </>
  );
};

export default Header;
