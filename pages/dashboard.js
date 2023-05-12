/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/react";
import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";

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
      <div className="h-full w-60 bg-slate-50 relative shrink-0">
        <div className="text-center h-20 flex items-center justify-center font-poppins">
          <h1 className="text-xl text-slate-700 font-extrabold">
            95<span className="font-light">Bills.com</span>
          </h1>
        </div>
        <ul className="px-4 font-poppins space-y-3">
          <li className="py-3 px-4 rounded-md bg-slate-200 text-slate-600 font-medium flex space-x-3 items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 text-slate-700"
            >
              <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
              <path
                fill-rule="evenodd"
                d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                clip-rule="evenodd"
              />
            </svg>

            <span>Invoices</span>
          </li>
          <li className="py-3 px-4 rounded-md bg-slate-200/0 text-slate-600 font-medium flex space-x-3 items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 text-slate-700"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>

            <span>Paid</span>
          </li>
          <li className="py-3 px-4 rounded-md bg-slate-200/0 text-slate-600 font-medium flex space-x-3 items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 text-slate-700"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
              />
            </svg>

            <span>Due</span>
          </li>
          <li className="py-3 px-4 rounded-md bg-slate-200/0 text-slate-600 font-medium flex space-x-3 items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 text-slate-700"
            >
              <path
                fill-rule="evenodd"
                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                clip-rule="evenodd"
              />
            </svg>

            <span>Settings</span>
          </li>
        </ul>
        <div className="absolute bottom-10 md:bottom-0 inset-x-0 w-full">
          <div className="space-y-3 p-5">
            <img
              src={session.data.user.image}
              className="h-10 w-10 rounded-full"
              alt=""
            />
            <div>
              <h2 className="text-sm text-slate-700 font-medium">
                {session.data.user.name}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {session.data.user.email}
              </p>
            </div>
          </div>

          <div className=" bg-slate-200 p-5">
            <h2 className="text-slate-700 font-bold text-sm">Need help?</h2>
            <p className="text-xs text-slate-500 mt-2">
              Reach us at tem@95bills.com
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-full overflow-y-auto bg-white">
        <div className="h-20 w-full flex items-center"></div>
      </div>
    </div>
  );
}

export default Dashboard;
