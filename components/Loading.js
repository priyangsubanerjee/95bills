/* eslint-disable @next/next/no-img-element */
import GlobalStateContext from "@/states/globalStateContext";
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";

function Loading() {
  const { loadingOpen, setLoadingOpen, changeLoadingText } =
    useContext(GlobalStateContext);
  return (
    <>
      <AnimatePresence>
        {loadingOpen && (
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
            className="h-full fixed inset-0 w-full bg-black/50 flex lg:justify-center lg:items-center items-end z-30"
          >
            <div className="bg-white h-1/2 lg:w-[450px] w-full flex flex-col items-center justify-center lg:rounded-md">
              <img src="/icon/icon-512x512.png" alt="" className="h-24" />
              <p className="mt-6 font-medium text-slate-700">
                Processing payment ...
              </p>
              <div className="w-[50%] h-[3px] bg-slate-200 mt-16 rounded-3xl overflow-hidden">
                <div className="w-1/2 h-full bg-slate-500 rounded-3xl animate-slide-left"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Loading;
