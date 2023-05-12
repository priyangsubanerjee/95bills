/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import GlobalStateContext from "@/states/globalStateContext";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

function Sidenav() {
  const session = useSession();
  const { sidenav_menu, tab, setTab, setSidenavOpen } =
    useContext(GlobalStateContext) || [];
  const router = useRouter();

  useEffect(() => {
    if (!router.query.tab) {
      setTab(0);
    }

    switch (router.query.tab) {
      case "invoices":
        setTab(0);
        break;
      case "paid":
        setTab(1);
        break;
      case "due":
        setTab(2);
        break;
      case "customers":
        setTab(3);
        break;
      case "settings":
        setTab(4);
        break;
      default:
        setTab(0);
        break;
    }
  }, [router.query]);
  return (
    <div className="bg-slate-100 w-72 lg:w-60 h-full overflow-y-auto pb-28 lg:pb-0 shrink-0">
      <div className="text-center p-8 font-poppins">
        <h1 className="text-xl text-slate-700 font-extrabold">
          95<span className="font-light">Bills.com</span>
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <button className="flex items-center space-x-2 bg-white text-xs border font-medium font-poppins py-2 px-5 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-3 h-3"
          >
            <path
              fill-rule="evenodd"
              d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
              clip-rule="evenodd"
            />
          </svg>

          <span>Share</span>
        </button>
      </div>
      <ul className="p-4 mt-2 text-slate-700 text-sm font-medium space-y-2">
        {sidenav_menu.map((item, i) => {
          return (
            <li key={i}>
              <button
                onClick={() => {
                  router.push(`/dashboard?tab=${item.tab}`, undefined, {
                    shallow: true,
                  });
                  setSidenavOpen(false);
                }}
                className={`py-3 px-4 ${
                  tab == i && "bg-slate-200 active:bg-slate-200"
                } lg:hover:bg-slate-200 active:bg-slate-200 w-full rounded-md flex items-center space-x-3 cursor-pointer`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="p-6 font-poppins">
        <img
          className="h-12 w-12 rounded-full"
          src={session.data.user.image}
          alt=""
        />
        <h2 className="text-sm font-semibold mt-3 text-slate-700">
          {session.data.user.name}
        </h2>
        <p className="text-xs text-slate-500 mt-1 font-medium">
          {session.data.user.email}
        </p>
        <button
          onClick={() => signOut()}
          className="text-white font-medium text-xs bg-slate-500 hover:bg-slate-600 w-fit px-4 py-2 rounded mt-6"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
