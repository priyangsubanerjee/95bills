/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/react";
import React, { useContext } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import Sidenav from "@/components/Sidenav";
import GlobalStateContext from "@/context/globalStateContext";
import { AnimatePresence, motion } from "framer-motion";

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
  const { sidenavOpen, setSidenavOpen } = useContext(GlobalStateContext);
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

      <div>
        <button onClick={() => setSidenavOpen(true)}>Open</button>
      </div>
    </div>
  );
}

export default Dashboard;
