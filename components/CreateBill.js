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
          <div className="px-5">
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
