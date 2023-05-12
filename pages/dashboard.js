/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/react";
import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import Navbar from "@/components/Navbar";
import Sidenav from "@/components/Sidenav";

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
  console.log(session);
  return (
    <div className="h-screen w-screen fixed inset-0 bg-white flex overflow-hidden">
      <div className="hidden lg:block">
        <Sidenav />
      </div>
      <div className="h-full w-full overflow-y-auto bg-white">
        <Navbar />
      </div>
    </div>
  );
}

export default Dashboard;
