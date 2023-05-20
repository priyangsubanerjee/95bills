/* eslint-disable react-hooks/exhaustive-deps */
import GlobalStateContext from "@/states/globalStateContext";
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect } from "react";

function AddClient() {
  const { addClientOpen, setAddClientOpen } = useContext(GlobalStateContext);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("background")) {
        setAddClientOpen(false);
      }
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center background z-20"
    >
      <div className="h-fit max-h-screen overflow-y-auto lg:w-[450px] w-full bg-white lg:rounded-md">
        <div className="text-slate-700 text-sm">
          <div className="space-x-3 pt-5 px-5 flex items-center justify-between text-xs font-semibold text-slate-500">
            <div className="text-slate-700 text-sm">
              <div className="text-xs font-semibold text-slate-500">
                Add Client
              </div>
            </div>
            <button
              onClick={() => {
                setAddClientOpen(false);
              }}
              className="text-blue-500 font-medium text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="px-5 mt-5 space-y-4">
          <div className="space-y-2">
            <div className="h-12 px-4 w-full border focus-within:border-blue-500 rounded-md flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 text-slate-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <input
                type="text"
                placeholder="Full name"
                className="ml-3 w-full outline-none"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-12 px-4 w-full border focus-within:border-blue-500 rounded-md flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 text-slate-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                />
              </svg>

              <input
                type="email"
                placeholder="Email address"
                className="ml-3 w-full outline-none"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-12 px-4 w-full border focus-within:border-blue-500 rounded-md flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 text-slate-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>

              <input
                type="tel"
                placeholder="Contact number"
                className="ml-3 w-full outline-none"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="h-fit w-full border focus-within:border-blue-500 rounded-md flex items-center">
            <textarea
              name=""
              className="p-4 w-full outline-none"
              id=""
              rows={4}
              placeholder="Address"
            ></textarea>
          </div>
        </div>
        <div className="p-5">
          <button
            key={"cancel"}
            className="p-4 text-sm rounded-md font-poppins font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 w-full mb-4 lg:mb-0 lg:text-sm"
          >
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default AddClient;
