/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/react";
import React, { useContext, useState } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import Sidenav from "@/components/Sidenav";
import GlobalStateContext from "@/states/globalStateContext";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import PayCard from "@/components/PayCard";
import CreateBill from "@/components/CreateBill";
import AddClient from "@/components/AddClient";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

function Dashboard() {
  const session = useSession();
  const { tab, setTab } = useContext(GlobalStateContext) || [];
  const { createDefaultStatus, setCreateDefaultStatus } =
    useContext(GlobalStateContext);

  const {
    sidenavOpen,
    setSidenavOpen,
    createBillOpen,
    setCreateBillOpen,
    addClientOpen,
    setAddClientOpen,
  } = useContext(GlobalStateContext);
  const router = useRouter();
  return (
    <div className="h-screen w-screen fixed inset-0 bg-white lg:flex overflow-hidden">
      <div className="hidden lg:block">
        <Sidenav />
      </div>
      <AnimatePresence>
        {sidenavOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 bg-black/70 h-screen w-screen flex overflow-hidden z-10"
          >
            <Sidenav />
            <div
              onClick={() => setSidenavOpen(false)}
              className="w-full h-full"
            ></div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-full h-full overflow-y-auto">
        <div className="lg:p-20 p-6">
          <div className="flex items-center">
            <button className="lg:hidden" onClick={() => setSidenavOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <h1 className="w-fit text-2xl lg:text-4xl text-slate-700 font-bold font-poppins ml-4 lg:ml-0">
              {router.query.tab
                ? router.query.tab?.charAt(0).toUpperCase() +
                  router.query.tab?.slice(1)
                : "Invoices"}
            </h1>

            <div className="ml-auto font-medium text-blue-500">
              {router.query.tab == "invoices" ? (
                <button
                  className=""
                  onClick={() => {
                    setCreateBillOpen(true);
                    setCreateDefaultStatus("due");
                  }}
                >
                  Create
                </button>
              ) : router.query.tab == "clients" ? (
                <button onClick={() => setAddClientOpen(true)} className="">
                  Add
                </button>
              ) : router.query.tab == "paid" ? (
                <button
                  onClick={() => {
                    setCreateDefaultStatus("paid_onTime");
                    setCreateBillOpen(true);
                  }}
                  className=""
                >
                  Add Record
                </button>
              ) : router.query.tab == "due" ? (
                <button
                  onClick={() => {
                    setCreateBillOpen(true);
                    setCreateDefaultStatus("due");
                  }}
                  className=""
                >
                  Add
                </button>
              ) : (
                <button
                  className=""
                  onClick={() => {
                    setCreateBillOpen(true);
                    setCreateDefaultStatus("due");
                  }}
                >
                  Create
                </button>
              )}
            </div>
          </div>
          <p className="text-slate-500 text-xs lg:text-sm mt-3">
            Tap on an invoice to view details.
          </p>
          {tab == 0 ? (
            <div>
              <div className="space-y-4 mt-10">
                <PayCard />
              </div>
            </div>
          ) : tab == 1 ? (
            <div>Paid</div>
          ) : tab == 2 ? (
            <div>Due</div>
          ) : tab == 3 ? (
            <div>Customers</div>
          ) : tab == 4 ? (
            <div>Settings</div>
          ) : null}
        </div>
      </div>
      <AnimatePresence>{createBillOpen && <CreateBill />}</AnimatePresence>
      <AnimatePresence>{addClientOpen && <AddClient />}</AnimatePresence>
    </div>
  );
}

export default Dashboard;
