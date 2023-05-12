/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/react";
import React, { useContext } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import Sidenav from "@/components/Sidenav";
import GlobalStateContext from "@/states/globalStateContext";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

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
  const { sidenavOpen, setSidenavOpen } = useContext(GlobalStateContext);
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
          <div className="flex items-center space-x-4 lg:space-x-0">
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
            <h1 className="w-fit text-2xl lg:text-5xl text-slate-700 font-bold font-poppins">
              {router.query.tab
                ? router.query.tab?.charAt(0).toUpperCase() +
                  router.query.tab?.slice(1)
                : "Invoices"}
            </h1>
          </div>
          <p className="text-slate-500 text-xs lg:text-sm mt-3">
            Tap on an invoice to view details.
          </p>
          {tab == 0 ? (
            <div>
              <div className="space-y-4 mt-10">
                <div className="w-full lg:hidden bg-slate-50 p-5 rounded-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-slate-700 text-sm">
                        <span className="font-light">#</span>RT3ED
                      </span>
                    </div>
                    <div className="flex items-center justify-center text-slate-600 text-xs">
                      19th July 2022
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-slate-600 text-sm">
                      Aditya Kumar Jha
                    </div>
                    <div className="flex font-medium items-center text-yellow-500 justify-center space-x-3 p-3">
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">Due</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <button className="flex items-center text-xs space-x-2 text-slate-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                      <span>View items</span>
                    </button>
                    <div className="flex justify-center items-center text-slate-700 text-base font-semibold">
                      ₹23459
                    </div>
                  </div>
                </div>
                <div className="w-full lg:hidden bg-slate-50 p-5 rounded-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-slate-700 text-sm">
                        <span className="font-light">#</span>RT3ED
                      </span>
                    </div>
                    <div className="flex items-center justify-center text-slate-600 text-xs">
                      19th July 2022
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-slate-600 text-sm">
                      Aditya Kumar Jha
                    </div>
                    <div className="flex font-medium items-center text-teal-500 justify-center space-x-3 p-3">
                      <div className="h-3 w-3 rounded-full bg-teal-500"></div>
                      <span className="text-sm">Paid</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <button className="flex items-center text-xs space-x-2 text-slate-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                      <span>View items</span>
                    </button>
                    <div className="flex justify-center items-center text-slate-700 text-base font-semibold">
                      ₹23459
                    </div>
                  </div>
                </div>
                <div className="w-full h-20 bg-slate-50 rounded hidden lg:grid grid-cols-7 px-5 font-poppins">
                  <div className="flex items-center justify-center font-semibold text-slate-700 text-sm">
                    <span className="font-light">#</span>RT3ED
                  </div>
                  <div className="flex items-center justify-center text-slate-600 text-sm">
                    19th July 2022
                  </div>
                  <div className="flex justify-center items-center text-slate-600 text-sm">
                    Aditya Kumar Jha
                  </div>
                  <div className="flex justify-center items-center text-slate-700 text-base font-semibold">
                    ₹23459
                  </div>

                  <div className="flex justify-center items-center text-slate-600 text-sm">
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
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-center items-center text-slate-600 text-sm">
                    <div className="flex font-medium items-center text-yellow-500 justify-center space-x-3 p-3">
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <span>Due</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center text-slate-600 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ) : tab == 1 ? (
            <div>
              <div className="space-y-4 mt-10">
                <div className="w-full h-20 bg-slate-50 rounded grid grid-cols-7 px-5 font-poppins">
                  <div className="flex items-center justify-center font-semibold text-slate-700 text-sm">
                    <span className="font-light">#</span>RT3ED
                  </div>
                  <div className="flex items-center justify-center text-slate-600 text-sm">
                    19th July 2022
                  </div>
                  <div className="flex justify-center items-center text-slate-600 text-sm">
                    Aditya Kumar Jha
                  </div>
                  <div className="flex justify-center items-center text-slate-700 text-base font-semibold">
                    ₹23459
                  </div>

                  <div className="flex justify-center items-center text-slate-600 text-sm">
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
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-center items-center text-slate-600 text-sm">
                    <div className="flex font-medium items-center text-teal-500 justify-center space-x-3 p-3">
                      <div className="h-3 w-3 rounded-full bg-teal-500"></div>
                      <span>Paid</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center text-slate-600 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-full h-20 bg-slate-50 rounded grid grid-cols-7 px-5 font-poppins">
                  <div className="flex items-center justify-center font-semibold text-slate-700 text-sm">
                    <span className="font-light">#</span>RT3ED
                  </div>
                  <div className="flex items-center justify-center text-slate-600 text-sm">
                    19th July 2022
                  </div>
                  <div className="flex justify-center items-center text-slate-600 text-sm">
                    Aditya Kumar Jha
                  </div>
                  <div className="flex justify-center items-center text-slate-700 text-base font-semibold">
                    ₹23459
                  </div>

                  <div className="flex justify-center items-center text-slate-600 text-sm">
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
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-center items-center text-slate-600 text-sm">
                    <div className="flex font-medium items-center text-yellow-500 justify-center space-x-3 p-3">
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <span>Due</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center text-slate-600 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ) : tab == 2 ? (
            <div>
              <div className="space-y-4 mt-10">
                <div className="w-full h-20 bg-slate-50 rounded grid grid-cols-7 px-5 font-poppins">
                  <div className="flex items-center justify-center font-semibold text-slate-700 text-sm">
                    <span className="font-light">#</span>RT3ED
                  </div>
                  <div className="flex items-center justify-center text-slate-600 text-sm">
                    19th July 2022
                  </div>
                  <div className="flex justify-center items-center text-slate-600 text-sm">
                    Aditya Kumar Jha
                  </div>
                  <div className="flex justify-center items-center text-slate-700 text-base font-semibold">
                    ₹23459
                  </div>

                  <div className="flex justify-center items-center text-slate-600 text-sm">
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
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-center items-center text-slate-600 text-sm">
                    <div className="flex font-medium items-center text-teal-500 justify-center space-x-3 p-3">
                      <div className="h-3 w-3 rounded-full bg-teal-500"></div>
                      <span>Paid</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center text-slate-600 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-full h-20 bg-slate-50 rounded grid grid-cols-7 px-5 font-poppins">
                  <div className="flex items-center justify-center font-semibold text-slate-700 text-sm">
                    <span className="font-light">#</span>RT3ED
                  </div>
                  <div className="flex items-center justify-center text-slate-600 text-sm">
                    19th July 2022
                  </div>
                  <div className="flex justify-center items-center text-slate-600 text-sm">
                    Aditya Kumar Jha
                  </div>
                  <div className="flex justify-center items-center text-slate-700 text-base font-semibold">
                    ₹23459
                  </div>

                  <div className="flex justify-center items-center text-slate-600 text-sm">
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
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-center items-center text-slate-600 text-sm">
                    <div className="flex font-medium items-center text-yellow-500 justify-center space-x-3 p-3">
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <span>Due</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center text-slate-600 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ) : tab == 3 ? (
            <div>Settings</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
