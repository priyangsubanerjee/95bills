import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function PayCard() {
  const [detailedViewOpen, setDetailedViewOpen] = useState(false);
  const [changeStatus, setChangeStatus] = useState(true);
  // close detailed view on escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setDetailedViewOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // close when clicked outside

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains("card")) {
        setDetailedViewOpen(false);
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
      <div
        onClick={() => setDetailedViewOpen(true)}
        className="w-full lg:hidden bg-slate-50 p-5 rounded-md"
      >
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
          <div className="text-slate-600 text-sm">Craig Bernard</div>
          <div className="flex font-medium items-center text-yellow-500 justify-center space-x-3 p-3">
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <span className="text-sm">Due</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <button className="flex items-center text-xs space-x-2 text-slate-500">
            <span>View expanded</span>
          </button>
          <div className="flex justify-center items-center text-slate-700 text-base font-semibold">
            ₹23459
          </div>
        </div>
      </div>
      <div
        onClick={() => setDetailedViewOpen(true)}
        className="w-full h-20 cursor-pointer hover:bg-slate-100 bg-slate-50 rounded hidden lg:grid grid-cols-6 px-5 font-poppins transition-all"
      >
        <div className="flex items-center justify-center font-semibold text-slate-700 text-sm">
          <span className="font-light">#</span>RT3ED
        </div>
        <div className="flex items-center justify-center text-slate-600 text-sm">
          19th July 2022
        </div>
        <div className="flex justify-center items-center text-slate-600 text-sm">
          Craig Bernard
        </div>
        <div className="flex justify-center items-center text-slate-700 text-base font-semibold">
          ₹23459
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
      <AnimatePresence>
        {detailedViewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center card z-10"
          >
            <div className="h-fit max-h-screen overflow-y-auto lg:w-[600px] w-full bg-white p-5 lg:p-7 lg:rounded-md">
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
              <div className="flex items-center mt-5 bg-yellow-50 overflow-hidden h-12 rounded-md">
                <div className="h-3 w-3 text-sm rounded-full bg-yellow-500 ml-4"></div>
                <span className="text-sm font-poppins font-medium text-yellow-500 ml-3">
                  Payment due
                </span>
                <button
                  onClick={() => {
                    setChangeStatus(true);
                    console.log(changeStatus);
                  }}
                  className="text-sm text-slate-900 px-3 py-2 rounded ml-auto"
                >
                  Change status
                </button>
              </div>
              <div className="mt-7 font-poppins">
                <div className="text-xs font-poppins space-y-2 text-slate-600">
                  <p className="font-medium text-slate-700">Craing Bernard</p>
                  <p>24th Street, 2nd Avenue, New York</p>
                  <p>craig@gmail.com</p>
                </div>
                <div className="text-slate-700 text-xl font-semibold mt-7 text-right">
                  ₹23459
                </div>

                <div className="mt-5 text-sm border-t pt-6 space-y-6 font-sans">
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
                onClick={() => setDetailedViewOpen(false)}
                className="p-3 rounded-md font-poppins font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 w-full mt-10 mb-4 lg:mb-0 lg:text-sm"
              >
                Done
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {changeStatus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center status-card z-20"
          >
            <div className="h-fit max-h-screen overflow-y-auto lg:w-[600px] w-full bg-white lg:rounded-md">
              <div className="text-slate-700">
                <div className="space-x-3 py-5 px-5 text-center text-xs font-semibold text-slate-500">
                  Choose status
                </div>
                <div className="space-x-3 py-5 px-5 text-center border-t">
                  Paid on time
                </div>
                <div className="space-x-3 py-5 px-5 text-center border-t">
                  Due
                </div>
              </div>
              <div className="p-5">
                <button
                  onClick={() => setChangeStatus(false)}
                  className="p-3 rounded-md font-poppins font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 w-full mb-4 lg:mb-0 lg:text-sm"
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

export default PayCard;
