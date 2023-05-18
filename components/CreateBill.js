/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GlobalStateContext from "@/states/globalStateContext";

function CreateBill() {
  const [changeStatusOpen, setchangeStatusOpen] = useState(false);
  const [chooseClientOpen, setchooseClientOpen] = useState(false);
  const [addProductOpen, setAddProductOpen] = useState(false);
  const { createBillOpen, setCreateBillOpen } = useContext(GlobalStateContext);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setCreateBillOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains("card")) {
        setCreateBillOpen(false);
      } else if (event.target.classList.contains("status-card")) {
        setchangeStatusOpen(false);
      } else if (event.target.classList.contains("selectClient-card")) {
        setchooseClientOpen(false);
      } else if (event.target.classList.contains("add-product-card")) {
        setAddProductOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center card z-10"
      >
        <div className="h-fit max-h-screen overflow-y-auto lg:w-[600px] lg:h-fit w-full bg-white p-5 lg:p-7 lg:rounded-md">
          <div className="flex items-center justify-between">
            <div></div>
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
                setchangeStatusOpen(true);
              }}
              className="text-sm text-slate-900 px-3 py-2 rounded ml-auto"
            >
              Change status
            </button>
          </div>
          <div className="mt-7 font-poppins">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setchooseClientOpen(true)}
                className="font-medium text-slate-700 flex items-center space-x-3 text-sm"
              >
                <span>Select client</span>
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
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <button className="font-medium text-blue-500 text-xs">
                Add Client
              </button>
            </div>
            <div className="text-sm font-poppins space-y-2 text-slate-600"></div>

            <div className="mt-5 text-sm border-t pt-6 space-y-6 font-sans">
              <div className="flex items-center justify-end">
                <button
                  onClick={() => setAddProductOpen(true)}
                  className="font-medium text-blue-500 text-xs"
                >
                  Add Product
                </button>
              </div>
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
            key={"done"}
            onClick={() => setCreateBillOpen(false)}
            className="p-4 text-sm rounded-md font-poppins font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 w-full mt-10 mb-4 lg:mb-0 lg:text-sm"
          >
            Done
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {changeStatusOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center status-card z-20"
          >
            <div className="h-fit max-h-screen overflow-y-auto lg:w-[450px] w-full bg-white lg:rounded-md">
              <div className="text-slate-700 text-sm">
                <div className="space-x-3 py-5 px-5 text-center text-xs font-semibold text-slate-500">
                  Choose status
                </div>
                <div className="space-x-3 py-5 px-5 text-blue-600 text-center border-t">
                  Paid on time
                </div>
                <div className="space-x-3 py-5 px-5 text-blue-600 text-center border-t">
                  Paid late
                </div>
                <div className="space-x-3 py-5 px-5 text-blue-600 text-center border-t">
                  Due
                </div>
              </div>
              <div className="p-5">
                <button
                  key={"cancel"}
                  onClick={() => setchangeStatusOpen(false)}
                  className="p-4 text-sm rounded-md font-poppins font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 w-full mb-4 lg:mb-0 lg:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {chooseClientOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center selectClient-card z-20"
          >
            <div className="h-[70%] overflow-y-auto lg:w-[450px] w-full bg-white lg:rounded-md relative">
              <div className="text-slate-700 text-sm sticky top-0 inset-x-0 bg-white border-b">
                <div className="space-x-3 pt-5 px-5 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Select client</span>
                  <button
                    onClick={() => {
                      setchooseClientOpen(false);
                    }}
                    className="text-blue-500 font-medium text-sm"
                  >
                    Cancel
                  </button>
                </div>
                <div className="p-5">
                  <div className="w-full bg-slate-100 flex items-center px-3 h-12 rounded-md text-slate-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>

                    <input
                      type="text"
                      className="bg-transparent ml-2 h-full w-full text-base outline-none"
                      placeholder="Search client"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>

              <div>
                <ul>
                  {[...Array(50)].map((e, i) => {
                    return (
                      <li key={i}>
                        <div className="text-xs font-poppins space-y-3 text-slate-600 p-5 border-b">
                          <p className="font-medium text-slate-700">
                            Craing Bernard
                          </p>
                          <p>24th Street, 2nd Avenue, New York</p>
                          <p>craig@gmail.com</p>
                          <p>+120 9213123</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="p-5 hidden">
                <button
                  key={"cancel-choose-client"}
                  onClick={() => setchooseClientOpen(false)}
                  className="p-4 text-sm rounded-md font-poppins font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 w-full mb-4 lg:mb-0 lg:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {addProductOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center add-product-card z-20"
          >
            <div className="h-fit max-h-screen overflow-y-auto lg:w-[450px] w-full bg-white lg:rounded-md relative">
              <div className="text-slate-700 text-sm border-b">
                <div className="space-x-3 py-5 px-5 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Add product</span>
                  <button
                    onClick={() => {
                      setchooseClientOpen(false);
                    }}
                    className="text-blue-500 font-medium text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="space-y-2">
                  <label
                    className="block text-xs font-semibold text-slate-500 font-poppins"
                    htmlFor=""
                  >
                    Product name
                  </label>
                  <input
                    type="text"
                    className=" border rounded-md px-4 py-3 w-full outline-none text-slate-700"
                    name=""
                    id=""
                    placeholder="Css snippet"
                  />
                </div>
                <div className="space-y-2 mt-5">
                  <label
                    className="block text-xs font-semibold text-slate-500 font-poppins"
                    htmlFor=""
                  >
                    Price per unit
                  </label>
                  <div className="flex items-center border rounded-md px-4">
                    <span>₹</span>
                    <input
                      type="phone"
                      className="px-3 bg-transparent py-3 w-full outline-none text-slate-700"
                      name=""
                      id=""
                      placeholder="400"
                    />
                  </div>
                </div>
                <div className="space-y-2 mt-5">
                  <label
                    className="block text-xs font-semibold text-slate-500 font-poppins"
                    htmlFor=""
                  >
                    Quantity
                  </label>
                  <div className="flex items-center h-12">
                    <input
                      type="phone"
                      className="border rounded-md px-4 h-full w-20 outline-none text-slate-700"
                      name=""
                      id=""
                      value={0}
                      placeholder="0"
                    />
                    <button className="flex items-center justify-center bg-slate-50 text-slate-800 rounded-md h-full px-4 ml-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <button className="flex items-center justify-center bg-slate-50 text-slate-700 rounded-md h-full px-4 ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <button
                  onClick={() => setAddProductOpen(false)}
                  className="p-4 text-sm rounded-md font-poppins font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 w-full mb-4 lg:mb-0 lg:text-sm"
                >
                  Add
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CreateBill;
