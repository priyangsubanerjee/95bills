/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GlobalStateContext from "@/states/globalStateContext";

function CreateBill() {
  const [changeStatus, setChangeStatus] = useState(false);
  const [chooseClient, setChooseClient] = useState(false);
  const { createBillOpen, setCreateBillOpen } = useContext(GlobalStateContext);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setCreateBillOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains("card")) {
        setCreateBillOpen(false);
      } else if (event.target.classList.contains("status-card")) {
        setChangeStatus(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center card z-10"
      >
        <div className="h-[70%] max-h-screen overflow-y-auto lg:w-[600px] w-full bg-white p-5 lg:p-7 lg:rounded-md">
          <div className="flex items-center justify-between">
            <div></div>
            <div className="flex items-center justify-center text-slate-600 text-xs">
              19th July 2022
            </div>
          </div>
          <div className="flex items-center mt-5 bg-yellow-50 overflow-hidden h-12 rounded-md">
            <div className="h-3 w-3 text-sm rounded-full bg-yellow-500 ml-4"></div>
            <span className="text-sm font-poppins font-medium text-yellow-500 ml-3">
              Payment due
            </span>
            <button
              onClick={() => {
                setChangeStatus(true);
              }}
              className="text-sm text-slate-900 px-3 py-2 rounded ml-auto"
            >
              Change status
            </button>
          </div>
          <div className="mt-7 font-poppins">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setChooseClient(true)}
                className="font-medium text-slate-700 flex items-center space-x-3"
              >
                <span>Select client</span>
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
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <button className="font-medium text-blue-500 text-xs">
                Add Client
              </button>
            </div>
            <div className="text-sm font-poppins space-y-2 text-slate-600"></div>

            <div className="mt-5 text-sm border-t pt-6 space-y-6 font-sans">
              <div className="flex items-center justify-end">
                <button className="font-medium text-blue-500 text-xs">
                  Add Product
                </button>
              </div>
              <div className="grid grid-cols-3 text-slate-700">
                <span>Account modal</span>
                <span className="text-right">2</span>
                <span className="text-right">800</span>
              </div>
              <div className="grid grid-cols-3 text-slate-700">
                <span>Account modal</span>
                <span className="text-right">2</span>
                <span className="text-right">800</span>
              </div>
            </div>
          </div>

          <button
            key={"done"}
            onClick={() => setCreateBillOpen(false)}
            className="p-4 text-sm rounded-md font-poppins font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 w-full mt-10 mb-4 lg:mb-0 lg:text-sm"
          >
            Done
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {changeStatus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center status-card z-20"
          >
            <div className="h-fit max-h-screen overflow-y-auto lg:w-[450px] w-full bg-white lg:rounded-md">
              <div className="text-slate-700 text-sm">
                <div className="space-x-3 py-5 px-5 text-center text-xs font-semibold text-slate-500">
                  Choose status
                </div>
                <div className="space-x-3 py-5 px-5 text-blue-600 text-center border-t">
                  Paid on time
                </div>
                <div className="space-x-3 py-5 px-5 text-blue-600 text-center border-t">
                  Paid late
                </div>
                <div className="space-x-3 py-5 px-5 text-blue-600 text-center border-t">
                  Due
                </div>
              </div>
              <div className="p-5">
                <button
                  key={"cancel"}
                  onClick={() => setChangeStatus(false)}
                  className="p-4 text-sm rounded-md font-poppins font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 w-full mb-4 lg:mb-0 lg:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {chooseClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center status-card z-20"
          >
            <div className="h-[70%] overflow-y-auto lg:w-[450px] w-full bg-white lg:rounded-md relative">
              <div className="text-slate-700 text-sm sticky top-0 inset-x-0 bg-white border-b">
                <div className="space-x-3 pt-5 px-5 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Choose client</span>
                  <button
                    onClick={() => {
                      setChooseClient(false);
                    }}
                    className="text-blue-500 font-medium text-sm"
                  >
                    Cancel
                  </button>
                </div>
                <div className="p-5">
                  <div className="w-full bg-slate-100 flex items-center px-3 h-12 rounded-md text-slate-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>

                    <input
                      type="text"
                      className="bg-transparent ml-2 h-full w-full text-base outline-none"
                      placeholder="Search client"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>

              <div>
                <ul>
                  {[...Array(50)].map((e, i) => {
                    return <li key={i}>Item</li>;
                  })}
                </ul>
              </div>
              <div className="p-5 hidden">
                <button
                  key={"cancel"}
                  onClick={() => setChooseClient(false)}
                  className="p-4 text-sm rounded-md font-poppins font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 w-full mb-4 lg:mb-0 lg:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CreateBill;
