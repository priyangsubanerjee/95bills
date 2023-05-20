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
        <div className="p-5 space-y-4">
          <div className="space-y-2">
            <div className="h-12 w-full border focus-within:border-blue-500 rounded-md flex items-center">
              <input
                type="text"
                placeholder="John Doe"
                className="px-4 w-full outline-none"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-12 w-full border focus-within:border-blue-500 rounded-md flex items-center">
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="px-4 w-full outline-none"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-12 w-full border focus-within:border-blue-500 rounded-md flex items-center">
              <input
                type="tel"
                placeholder="0998661322"
                className="px-4 w-full outline-none"
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
