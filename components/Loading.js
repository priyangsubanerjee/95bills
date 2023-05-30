/* eslint-disable @next/next/no-img-element */
import React from "react";

function Loading() {
  return (
    <div className="h-full fixed inset-0 w-full bg-black/50 flex items-end z-30">
      <div className="bg-white h-1/2 w-full flex flex-col items-center justify-center">
        <img src="/icon/icon-512x512.png" alt="" className="h-32" />
        <div className="w-[50%] h-[3px] bg-slate-200 mt-10 rounded-3xl overflow-hidden">
          <div className="w-1/2 h-full bg-slate-500 rounded-3xl animate-slide-left"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
