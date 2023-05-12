import React from "react";

export default function Navbar() {
  return (
    <div className="h-20 bg-slate-100 flex items-center px-6">
      <button>
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
      <h1 className="text-xl text-slate-700 font-extrabold ml-5">
        95<span className="font-light">Bills.com</span>
      </h1>
      <button className="ml-auto bg-white px-4 py-2 rounded-md text-sm font-medium">
        Create
      </button>
    </div>
  );
}
