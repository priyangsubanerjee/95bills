/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GlobalStateContext from "@/states/globalStateContext";

function CreateBill() {
  const { createBillOpen, setCreateBillOpen } = useContext(GlobalStateContext);
  const [changeStatusOpen, setChangeStatusOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("closeCard")) {
        setCreateBillOpen(false);
      } else if (e.target.classList.contains("closeStatusOptionCard")) {
        setChangeStatusOpen(false);
      }
    });
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center closeCard z-20"
      >
        <div className="h-fit max-h-screen overflow-y-auto lg:w-[450px] w-full bg-white lg:rounded-md">
          <div className="grid grid-cols-3 text-sm p-5">
            <button
              onClick={() => setCreateBillOpen(false)}
              className="text-left text-blue-500 font-medium"
            >
              Cancel
            </button>
            <span className="text-center text-xs font-semibold text-slate-500">
              Create Bill
            </span>
            <button className="text-right text-blue-500 font-medium">
              Done
            </button>
          </div>
          <div className="px-5 space-y-4">
            <div className="h-12 text-sm bg-yellow-50 rounded-md px-5 flex items-center justify-between">
              <div className="flex font-medium items-center text-yellow-500 justify-center space-x-3">
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <span>Payment due</span>
              </div>
              <button
                onClick={() => setChangeStatusOpen(true)}
                className="text-sm text-slate-800"
              >
                Change status
              </button>
            </div>

            <div className="flex text-slate-800 text-sm items-center px-4 h-12 border rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-slate-600"
              >
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>
              <span className="ml-2">Choose client</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4 ml-auto"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
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
      <AnimatePresence>
        {changeStatusOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center closeStatusOptionCard z-20"
          >
            <div className="h-fit max-h-screen overflow-y-auto lg:w-[450px] w-full bg-white lg:rounded-md pb-5">
              <div className="grid grid-cols-3 text-sm p-5">
                <button
                  onClick={() => setChangeStatusOpen(false)}
                  className="text-left text-blue-500 font-medium"
                >
                  Cancel
                </button>
                <span className="text-center text-xs font-semibold text-slate-500">
                  Choose status
                </span>
                <button className="text-right text-blue-500 font-medium"></button>
              </div>
              <ul className="text-center text-blue-500 mt-3">
                <li className="py-4 border-b">Paid on time</li>
                <li className="py-4 border-b">Paid late</li>
                <li className="py-4">Due</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CreateBill;
