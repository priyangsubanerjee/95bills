import React, { useState } from "react";
import Sidenav from "./Sidenav";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [sidenav, setSidenav] = useState(false);
  return (
    <div className="h-20 bg-slate-50 flex items-center px-6 lg:hidden">
      <div className="flex items-center space-x-4 lg:hidden">
        <button onClick={() => setSidenav(true)}>
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
        <h1 className="text-xl text-slate-700 font-extrabold">
          95<span className="font-light">Bills.com</span>
        </h1>
      </div>
      <div className="ml-auto font-poppins">
        <button className="font-medium bg-white text-slate-700 px-4 py-2 rounded-md text-sm">
          Generate
        </button>
      </div>
      <AnimatePresence>
        {sidenav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidenav(false)}
            className="fixed inset-0 h-screen w-screen bg-black/70 z-10"
          >
            <Sidenav />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
