/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GlobalStateContext from "@/states/globalStateContext";

function CreateBill({}) {
  const dateref = useRef(null);
  const [changeStatusOpen, setchangeStatusOpen] = useState(false);
  const [chooseClientOpen, setchooseClientOpen] = useState(false);
  const [addProductOpen, setAddProductOpen] = useState(false);
  const { createBillOpen, setCreateBillOpen, setAddClientOpen } =
    useContext(GlobalStateContext);
  const { createDefaultStatus, setCreateDefaultStatus } =
    useContext(GlobalStateContext);

  const [productProps, setproductProps] = useState({
    name: "",
    price_per_unit: "",
    quantity: 0,
  });

  const [editIndex, setEditIndex] = useState(null);

  const [billProps, setbillProps] = useState({
    id: Math.floor(Math.random() * 1000000000),
    client: {
      id: "",
    },
    products: [],
    status: createDefaultStatus,
    totalAmount: 0,
  });

  const resetProductProps = () => {
    setproductProps({
      name: "",
      price_per_unit: "",
      quantity: 0,
    });
  };

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
        resetProductProps();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (dateref.current) {
      dateref.current.valueAsDate = new Date();
    }
  }, [dateref]);

  useEffect(() => {
    setbillProps({
      ...billProps,
      status: createDefaultStatus,
    });
    setchangeStatusOpen(false);
  }, [createDefaultStatus]);

  return (
    <div>
      {/* Create bill */}

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
          <div
            className={`flex items-center mt-5 ${
              billProps.status == "due"
                ? "bg-yellow-50 text-yellow-500 "
                : "bg-teal-50 text-green-500 "
            } overflow-hidden h-12 rounded-md`}
          >
            <div
              className={`h-3 w-3  ml-4 text-sm rounded-full ${
                billProps.status == "due"
                  ? "bg-yellow-500 text-yellow-500"
                  : "bg-teal-500 text-green-500"
              }`}
            ></div>
            <span className="text-sm font-poppins font-medium ml-3">
              {billProps.status == "due"
                ? "Due"
                : billProps.status == "paid_late"
                ? "Paid late"
                : "Paid on time"}
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
            <div className="flex items-center justify-between border-b pb-5">
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
            </div>
            <div className="mt-7 text-sm space-y-6 font-sans">
              <div className="flex items-center justify-end">
                <button
                  onClick={() => setAddProductOpen(true)}
                  className="font-medium bg-blue-50 px-4 py-2 text-blue-500 text-xs rounded"
                >
                  Add Product
                </button>
              </div>
              {billProps.products.map((product, index) => {
                return (
                  <div key={index} className="grid grid-cols-6 text-slate-700">
                    <span
                      onClick={() => {
                        setproductProps({
                          ...productProps,
                          name: product.name,
                          price_per_unit: product.pricePerUnit,
                          quantity: product.qty,
                        });

                        setEditIndex(index);
                        setAddProductOpen(true);
                      }}
                      className="col-span-3"
                    >
                      {product.name}
                    </span>
                    <span
                      onClick={() => {
                        setproductProps({
                          ...productProps,
                          name: product.name,
                          price_per_unit: product.pricePerUnit,
                          quantity: product.qty,
                        });

                        setEditIndex(index);
                        setAddProductOpen(true);
                      }}
                      className="text-center"
                    >
                      {product.qty}
                    </span>
                    <span
                      onClick={() => {
                        setproductProps({
                          ...productProps,
                          name: product.name,
                          price_per_unit: product.pricePerUnit,
                          quantity: product.qty,
                        });

                        setEditIndex(index);
                        setAddProductOpen(true);
                      }}
                      className="text-right"
                    >
                      {product.total}
                    </span>
                    <span className="flex justify-end">
                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you want to delete this product?"
                            )
                          ) {
                            setbillProps({
                              ...billProps,
                              products: billProps.products.filter(
                                (e, i) => i != index
                              ),
                            });
                          }
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5 text-red-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              {billProps.products.length > 0 && (
                <>
                  <div className="flex justify-between items-center text-xl font-bold text-slate-700 border-t mt-10 pt-6">
                    <span className="text-base text-slate-700 font-poppins">
                      Total payable amount:
                    </span>
                    <span>
                      {"₹" +
                        billProps.products.reduce((a, b) => a + b.total, 0)}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-2 font-sans">
                    The above amount is inclusive of all taxes*
                  </div>
                </>
              )}
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

      {/* Change status */}

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
                <div
                  onClick={() => setCreateDefaultStatus("paid_onTime")}
                  className="space-x-3 py-5 px-5 text-blue-600 text-center border-t"
                >
                  Paid on time
                </div>

                <div
                  onClick={() => setCreateDefaultStatus("paid_late")}
                  className="space-x-3 py-5 px-5 text-blue-600 text-center border-t"
                >
                  Paid late
                </div>
                <div
                  onClick={() => {
                    setCreateDefaultStatus("due");
                  }}
                  className="space-x-3 py-5 px-5 text-blue-600 text-center border-t"
                >
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

      {/* Choose client */}

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

      {/* Add product */}

      <AnimatePresence>
        {addProductOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center add-product-card z-20"
          >
            <div className="h-fit max-h-screen overflow-y-auto lg:w-[450px] w-full bg-white lg:rounded-md relative">
              <div className="text-slate-700 text-sm">
                <div className="space-x-3 pt-5 px-5 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="opacity-0">Add product</span>
                  <button
                    onClick={() => {
                      setAddProductOpen(false);
                      resetProductProps();
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
                    className="border focus-within:border-blue-500 rounded-md px-4 py-3 w-full outline-none text-slate-700"
                    name=""
                    id=""
                    placeholder="Css snippet"
                    value={productProps.name}
                    onChange={(e) => {
                      setproductProps({
                        ...productProps,
                        name: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="space-y-2 mt-5">
                  <label
                    className="block text-xs font-semibold text-slate-500 font-poppins"
                    htmlFor=""
                  >
                    Price per unit
                  </label>
                  <div className="flex items-center border focus-within:border-blue-500 rounded-md px-4">
                    <span>₹</span>
                    <input
                      type="tel"
                      className="px-3 bg-transparent py-3 w-full outline-none text-slate-700"
                      name=""
                      id=""
                      value={productProps.price_per_unit}
                      onChange={(e) => {
                        setproductProps({
                          ...productProps,
                          price_per_unit: e.target.value,
                        });
                      }}
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
                      type="tel"
                      className="border focus-within:border-blue-500 rounded-md px-4 h-full w-20 outline-none text-slate-700"
                      name=""
                      id=""
                      value={productProps.quantity}
                      onChange={(e) => {
                        setproductProps({
                          ...productProps,
                          quantity: e.target.value,
                        });
                      }}
                      placeholder="0"
                    />
                    <button
                      onClick={() => {
                        setproductProps({
                          ...productProps,
                          quantity: productProps.quantity + 1,
                        });
                      }}
                      className="flex items-center justify-center bg-slate-50 text-slate-800 rounded-md h-full px-4 ml-5"
                    >
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
                    <button
                      onClick={() => {
                        setproductProps({
                          ...productProps,
                          quantity:
                            productProps.quantity === 0
                              ? 0
                              : productProps.quantity - 1,
                        });
                      }}
                      className="flex items-center justify-center bg-slate-50 text-slate-700 rounded-md h-full px-4 ml-2"
                    >
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
                  onClick={() => {
                    if (editIndex == null) {
                      setbillProps({
                        ...billProps,
                        products: [
                          ...billProps.products,
                          {
                            name: productProps.name,
                            pricePerUnit: productProps.price_per_unit,
                            qty: productProps.quantity,
                            total:
                              productProps.price_per_unit *
                              productProps.quantity,
                          },
                        ],
                      });
                    } else {
                      setbillProps({
                        ...billProps,
                        products: billProps.products.map((e, i) => {
                          if (i == editIndex) {
                            return {
                              name: productProps.name,
                              pricePerUnit: productProps.price_per_unit,
                              qty: productProps.quantity,
                              total:
                                productProps.price_per_unit *
                                productProps.quantity,
                            };
                          } else {
                            return e;
                          }
                        }),
                      });
                      setEditIndex(null);
                    }
                    resetProductProps();
                    setAddProductOpen(false);
                  }}
                  className="p-4 text-sm rounded-md font-poppins font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 w-full mb-4 lg:mb-0 lg:text-sm"
                >
                  {editIndex == null ? "Add product" : "Update product"}
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
