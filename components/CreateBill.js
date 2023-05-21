import React from "react";
import { motion } from "framer-motion";

function CreateBill() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center background z-20"
    >
      <div className="h-fit max-h-screen overflow-y-auto lg:w-[450px] w-full bg-white lg:rounded-md">
        <div className="grid grid-cols-3 text-sm p-5">
          <button className="text-left text-blue-500 font-medium">
            Cancel
          </button>
          <span className="text-center text-xs font-semibold text-slate-500">
            Create Bill
          </span>
          <button className="text-right text-blue-500 font-medium">Done</button>
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

export default CreateBill;
