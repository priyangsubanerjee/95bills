/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { signIn, useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const session = useSession();

  return (
    <main className="lg:flex lg:space-x-16 lg:h-screen items-center justify-end lg:px-28 overflow-auto">
      <Head>
        <title>Login | 95Bills.com</title>
      </Head>
      <div className="hidden lg:block font-poppins">
        <h1 className="text-6xl font-bold text-slate-700 leading-[1.2]">
          Generate <span className="text-slate-900">invoices</span> in seconds
        </h1>
        <p className="mt-10 text-slate-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 inline-block mr-4"
          >
            <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
            <path
              fill-rule="evenodd"
              d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
              clip-rule="evenodd"
            />
          </svg>
          Safe and secure. No credit card required.
        </p>

        <div className="mt-16 flex items-center">
          <button className="flex text-sm px-7 py-4 rounded-md items-center justify-center bg-white text-slate-700 shadow-2xl shadow-black/10 font-medium">
            Schedule a demo
          </button>
        </div>

        <div className="mt-20 text-xs">
          <button className="flex items-center space-x-2 text-slate-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="font-medium">Report an issue</span>
          </button>
        </div>
      </div>
      <div className="bg-white w-full h-full lg:h-fit lg:w-fit lg:min-w-[500px] overflow-hidden shadow-2xl shadow-black/5">
        <img
          src="https://assets.keap.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_1,f_auto,h_395,q_95,w_569/v1590531768/customer-service/customer%20experience/GettyImages-1197547531.jpg"
          alt=""
          className="h-64 object-cover w-full"
        />
        <div className="text-center p-8 font-poppins">
          <h1 className="text-2xl text-slate-700 font-extrabold">
            95<span className="font-light">Bills.com</span>
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Generate invoices in seconds.
          </p>
        </div>
        <div className="p-8 font-poppins">
          <p className="text-sm font-medium text-slate-600 text-center">
            Sign in to get started 🎉
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                signIn("google");
              }}
              className="flex justify-center items-center bg-slate-100 px-6 py-3 rounded-md"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png"
                alt=""
                className="h-5 w-5 mr-3"
              />
              <span className="text-sm font-medium text-slate-700">Google</span>
            </button>
            <button
              onClick={() => {
                signIn("github");
              }}
              className="flex justify-center items-center bg-slate-100 px-6 py-3 rounded-md"
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt=""
                className="h-5 w-5 mr-3"
              />
              <span className="text-sm font-medium text-slate-700">Github</span>
            </button>
          </div>

          <p className="mt-14 text-xs text-center text-slate-500">
            © 2021 95bills.com
          </p>
        </div>
      </div>
    </main>
  );
}
