/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GlobalStateContext from "@/states/globalStateContext";

function CreateBill() {
  const dateref = useRef(null);
  const { createBillOpen, setCreateBillOpen } = useContext(GlobalStateContext);
  const [changeStatusOpen, setChangeStatusOpen] = useState(false);
  const [addProductOpen, setAddProductOpen] = useState(true);
  useEffect(() => {
    dateref.current.valueAsDate = new Date();
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
        <div className="h-fit max-h-screen overflow-y-auto lg:w-[450px] w-full bg-white lg:rounded-md pb-5">
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
          <div className="px-5 space-y-4">
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

            <div className="flex mt-7 text-slate-800 text-sm items-center px-4 h-12 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4 text-slate-600"
              >
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>
              <span className="ml-2">Choose client</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4 ml-auto"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div className="flex text-slate-800 text-sm items-center px-4 h-12 border rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-slate-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clip-rule="evenodd"
                />
              </svg>

              <input
                type="date"
                className="bg-transparent ml-2"
                ref={dateref}
                name=""
                id=""
              />

              <span className="ml-auto text-sm text-slate-500">Due date</span>
            </div>

            <div className="border-b py-5 mt-6">
              <div className="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-3">No products added</span>
                <button
                  onClick={() => setAddProductOpen(true)}
                  className="ml-auto text-slate-700 bg-slate-50 px-4 py-2 text-sm rounded"
                >
                  Add product
                </button>
              </div>
            </div>

            <div className=" py-5 mt-6">
              <div className="flex items-center justify-between text-sm">
                <div className="ml-3 font-poppins font-semibold text-slate-700">
                  <p>Total payable amount</p>
                  <p className="font-sans font-normal text-xs mt-2">
                    *inclusive of all taxes
                  </p>
                </div>

                <span className="ml-3 font-poppins font-semibold text-slate-700 text-lg">
                  ₹0
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Status change  */}

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

      <AnimatePresence>
        {addProductOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center closeStatusOptionCard z-20"
          >
            <div className="h-fit max-h-screen overflow-y-auto lg:w-[450px] w-full bg-white lg:rounded-md pb-10">
              <div className="grid grid-cols-3 text-sm p-5">
                <button
                  onClick={() => setAddProductOpen(false)}
                  className="text-left text-blue-500 font-medium"
                >
                  Cancel
                </button>
                <span className="text-center text-xs font-semibold text-slate-500">
                  Add Product
                </span>
                <button className="text-right text-blue-500 font-medium">
                  Done
                </button>
              </div>
              <div className="px-5 mt-5">
                <label
                  className="block text-xs font-semibold text-slate-500"
                  htmlFor=""
                >
                  Product name
                </label>
                <div className="h-12 px-4 border flex items-center mt-2 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.75 4.5a.75.75 0 01.75-.75h.75c8.284 0 15 6.716 15 15v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75C18 11.708 12.292 6 5.25 6H4.5a.75.75 0 01-.75-.75V4.5zm0 6.75a.75.75 0 01.75-.75h.75a8.25 8.25 0 018.25 8.25v.75a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75v-.75a6 6 0 00-6-6H4.5a.75.75 0 01-.75-.75v-.75zm0 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <input
                    type="text"
                    placeholder="Popover modal"
                    className="h-full px-4 outline-none"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="px-5 mt-5">
                <label
                  className="block text-xs font-semibold text-slate-500"
                  htmlFor=""
                >
                  Price per unit
                </label>
                <div className="h-12 flex items-center space-x-5 mt-2">
                  <div className="w-fit h-full px-4 border flex items-center rounded">
                    ₹
                    <input
                      type="text"
                      placeholder="0"
                      className="h-full px-4 outline-none w-20"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="h-full flex items-center space-x-2">
                    <button className="h-full text-sm px-4 rounded-md bg-slate-100 text-slate-700">
                      ₹500
                    </button>
                    <button className="h-full text-sm px-4 rounded-md bg-slate-100 text-slate-700">
                      ₹1000
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-5 mt-5">
                <label
                  className="block text-xs font-semibold text-slate-500"
                  htmlFor=""
                >
                  Quantity
                </label>
                <div className="h-12 flex items-center space-x-5 mt-2">
                  <div className="w-fit h-full border flex items-center rounded">
                    <input
                      type="text"
                      placeholder="0"
                      className="h-full px-4 outline-none w-20"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="h-full flex items-center space-x-2">
                    <button className="h-full text-sm px-4 rounded-md bg-slate-100 text-slate-700">
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
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                    <button className="h-full text-sm px-4 rounded-md bg-slate-100 text-slate-700">
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
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CreateBill;
