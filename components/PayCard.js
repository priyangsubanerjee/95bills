import React, { useState } from "react";

function PayCard() {
  const [detailedViewOpen, setDetailedViewOpen] = useState(true);
  return (
    <div>
      <div className="w-full lg:hidden bg-slate-50 p-5 rounded-md">
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
          <div className="text-slate-600 text-sm">Aditya Kumar Jha</div>
          <div className="flex font-medium items-center text-yellow-500 justify-center space-x-3 p-3">
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <span className="text-sm">Due</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <button className="flex items-center text-xs space-x-2 text-slate-500">
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
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span>View items</span>
          </button>
          <div className="flex justify-center items-center text-slate-700 text-base font-semibold">
            ₹23459
          </div>
        </div>
      </div>
      <div className="w-full h-20 cursor-pointer hover:bg-slate-100 bg-slate-50 rounded hidden lg:grid grid-cols-6 px-5 font-poppins transition-all">
        <div className="flex items-center justify-center font-semibold text-slate-700 text-sm">
          <span className="font-light">#</span>RT3ED
        </div>
        <div className="flex items-center justify-center text-slate-600 text-sm">
          19th July 2022
        </div>
        <div className="flex justify-center items-center text-slate-600 text-sm">
          Aditya Kumar Jha
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
      {detailedViewOpen && (
        <div className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center">
          <div className="h-1/2 lg:w-[600px] w-full bg-white p-5">
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
            <div className="flex items-center mt-5 bg-yellow-50 h-12 px-2 rounded-md">
              <div className="h-3 w-3 text-sm rounded-full bg-yellow-500 ml-4"></div>
              <span className="text-sm font-poppins font-semibold text-yellow-500 ml-2">
                Due
              </span>

              <button className="text-sm flex items-center space-x-2 ml-2 h-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                  />
                </svg>
                <span>Remind</span>
              </button>
              <button className="bg-teal-600 text-sm ml-auto text-white h-8 px-4 rounded font-poppins">
                Mark as paid
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PayCard;
