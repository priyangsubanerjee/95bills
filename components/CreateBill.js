/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GlobalStateContext from "@/states/globalStateContext";

function CreateBill() {
  const dateref = useRef(null);
  const {
    createBillOpen,
    setCreateBillOpen,
    createBillStatus,
    setCreateBillStatus,
  } = useContext(GlobalStateContext);
  const [changeStatusOpen, setChangeStatusOpen] = useState(false);
  const [selectClientOpen, setSelectClientOpen] = useState(false);
  const [addProductOpen, setAddProductOpen] = useState(false);

  const [bill, setBill] = useState({
    status: createBillStatus,
    client: "",
    dueDate: dateref.current ? dateref.current.valueAsDat : new Date(),
    products: [],
    total: 0,
  });

  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const clients = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "9876543210",
      address:
        "123, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "2",
      name: "John Joe",
      email: "john@example.com",
      phone: "9874553210",
      address:
        "345, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const resetProduct = () => {
    setProduct({
      name: "",
      price: "",
      quantity: "",
    });
  };

  useEffect(() => {
    dateref.current.valueAsDate = new Date();
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("closeCard")) {
        setCreateBillOpen(false);
      } else if (e.target.classList.contains("closeStatusOptionCard")) {
        setChangeStatusOpen(false);
      } else if (e.target.classList.contains("closeAddProductCard")) {
        setAddProductOpen(false);
      } else if (e.target.classList.contains("closeClientSelectCard")) {
        setSelectClientOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    const total = bill.products.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    setBill({
      ...bill,
      total: total,
    });
  }, [bill.products]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center closeCard z-20"
      >
        <div className="h-fit max-h-screen overflow-y-auto lg:w-[550px] w-full bg-white lg:rounded-md pb-5">
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
          <div className="px-5">
            <div
              className={`h-12 text-sm ${
                bill.status == "due"
                  ? "bg-yellow-50 text-yellow-500"
                  : "bg-teal-50 text-teal-500"
              } rounded-md px-5 flex items-center justify-between`}
            >
              <div className="flex font-medium items-center justify-center space-x-3">
                <div
                  className={`h-3 w-3 rounded-full ${
                    bill.status == "due" ? "bg-yellow-500" : "bg-teal-500"
                  }`}
                ></div>
                <span>
                  {bill.status == "due"
                    ? "Due"
                    : bill.status == "paid"
                    ? "Paid"
                    : "Paid late "}
                </span>
              </div>
              <button
                onClick={() => setChangeStatusOpen(true)}
                className="text-sm text-slate-800"
              >
                Change status
              </button>
            </div>

            <div
              onClick={() => setSelectClientOpen(true)}
              className="flex mt-5 text-slate-800 text-sm items-center h-12 rounded-md px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4 text-slate-600"
              >
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>
              <span className="ml-3">
                {bill.client == "" ? "Select client" : bill.client.name}
              </span>
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

            <div className="flex mt-5 text-slate-800 text-sm items-center px-4 h-12 border rounded-md">
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
                {bill.products.length == 0 && (
                  <div className="flex items-center">
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
                  </div>
                )}
                <button
                  onClick={() => setAddProductOpen(true)}
                  className="ml-auto text-slate-700 bg-slate-50 px-4 py-2 text-sm rounded"
                >
                  {bill.products.length == 0
                    ? "Add product"
                    : "Add more products"}
                </button>
              </div>
              {bill.products.length > 0 && (
                <div className="mt-7 text-sm space-y-4">
                  {bill.products.map((product, index) => {
                    return (
                      <div key={index} className="grid grid-cols-6">
                        <span className=" col-span-3">{product.name}</span>
                        <span>{product.quantity}</span>
                        <span>₹{product.price * product.quantity}</span>
                        <div className="flex justify-end">
                          <button
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Are you sure you want to delete this product?"
                                )
                              ) {
                                setBill({
                                  ...bill,
                                  products: bill.products.filter(
                                    (item, i) => i !== index
                                  ),
                                });
                              }
                            }}
                            className="flex justify-end w-fit"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 h-5 text-red-500"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
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
                  ₹{bill.total}
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
            <div className="h-fit max-h-screen overflow-y-auto lg:w-[550px] w-full bg-white lg:rounded-md pb-5">
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
              <ul className="text-center text-blue-500 mt-3 text-sm">
                <li
                  onClick={() => {
                    setBill({
                      ...bill,
                      status: "paid",
                    });
                    setChangeStatusOpen(false);
                  }}
                  className="py-4 border-b"
                >
                  Paid on time
                </li>
                <li
                  onClick={() => {
                    setBill({
                      ...bill,
                      status: "paid_late",
                    });
                    setChangeStatusOpen(false);
                  }}
                  className="py-4 border-b"
                >
                  Paid late
                </li>
                <li
                  onClick={() => {
                    setBill({
                      ...bill,
                      status: "due",
                    });
                    setChangeStatusOpen(false);
                  }}
                  className="py-4"
                >
                  Due
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add products */}

      <AnimatePresence>
        {addProductOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center closeAddProductCard z-20"
          >
            <div className="h-fit max-h-screen overflow-y-auto lg:w-[550px] w-full bg-white lg:rounded-md pb-10">
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
                <button
                  onClick={() => {
                    if (
                      product.name == "" &&
                      product.price == "" &&
                      product.quantity == ""
                    ) {
                      alert("Please fill all the fields");
                      return;
                    }
                    setBill({
                      ...bill,
                      products: [...bill.products, product],
                    });
                    resetProduct();
                    setAddProductOpen(false);
                  }}
                  className="text-right text-blue-500 font-medium"
                >
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
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>

                  <input
                    type="text"
                    placeholder="Popover modal"
                    className="h-full px-4 outline-none"
                    value={product.name}
                    onChange={(e) =>
                      setProduct({ ...product, name: e.target.value })
                    }
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
                  <div className="w-fit h-full px-4 border flex items-center rounded-md overflow-hidden">
                    ₹
                    <input
                      type="tel"
                      placeholder="0"
                      className="h-full px-4 outline-none w-20"
                      value={product.price}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          price: e.target.value,
                        })
                      }
                      name=""
                      id=""
                    />
                  </div>
                  <div className="h-full flex items-center space-x-2">
                    <button
                      onClick={() =>
                        setProduct({
                          ...product,
                          price: 500,
                        })
                      }
                      className="h-full text-sm px-4 rounded-md bg-slate-100 text-slate-700"
                    >
                      ₹500
                    </button>
                    <button
                      onClick={() =>
                        setProduct({
                          ...product,
                          price: 1000,
                        })
                      }
                      className="h-full text-sm px-4 rounded-md bg-slate-100 text-slate-700"
                    >
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
                  <div className="w-fit h-full border flex items-center rounded-md">
                    <input
                      type="tel"
                      placeholder="0"
                      value={product.quantity}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          quantity: e.target.value,
                        })
                      }
                      className="h-full px-4 outline-none w-20 bg-transparent"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="h-full flex items-center space-x-2">
                    <button
                      onClick={() => {
                        if (product.quantity === "") {
                          setProduct({
                            ...product,
                            quantity: 1,
                          });
                        } else {
                          setProduct({
                            ...product,
                            quantity: parseInt(product.quantity) + 1,
                          });
                        }
                      }}
                      className="h-full text-sm px-4 rounded-md bg-slate-100 text-slate-700"
                    >
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
                    <button
                      onClick={() => {
                        if (product.quantity === "") {
                          setProduct({
                            ...product,
                            quantity: 1,
                          });
                        } else if (product.quantity > 0) {
                          setProduct({
                            ...product,
                            quantity: parseInt(product.quantity) - 1,
                          });
                        }
                      }}
                      className="h-full text-sm px-4 rounded-md bg-slate-100 text-slate-700"
                    >
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
              <p className="px-5 mt-7 text-xs text-slate-600">
                * Product once added cannot be edited
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Choose client */}

      <AnimatePresence>
        {selectClientOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/70 flex items-end lg:items-center justify-center closeClientSelectCard z-20"
          >
            <div className="h-[70%] relative max-h-screen overflow-y-auto lg:w-[550px] w-full bg-white lg:rounded-md pb-5">
              <div className="sticky top-0 inset-x-0 w-full bg-white">
                <div className="grid grid-cols-3 text-sm p-5">
                  <button
                    onClick={() => setSelectClientOpen(false)}
                    className="text-left text-blue-500 font-medium"
                  >
                    Cancel
                  </button>
                  <span className="text-center text-xs font-semibold text-slate-500">
                    Select client
                  </span>
                  <button className="text-right text-blue-500 font-medium"></button>
                </div>
                <div className="px-5">
                  <div className="flex items-center h-12 bg-slate-50 rounded-md px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-slate-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>

                    <input
                      type="text"
                      placeholder="Search client"
                      name=""
                      className="px-3 text-slate-700 bg-transparent outline-none"
                      id=""
                    />
                  </div>
                </div>
              </div>

              <div>
                {clients.map((e, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        setBill({
                          ...bill,
                          client: e,
                        });

                        setSelectClientOpen(false);
                      }}
                    >
                      <div className="border-b bg-white py-4 px-6 space-y-2 hover:bg-slate-50 cursor-pointer">
                        <p className="text-sm text-slate-700 font-semibold">
                          {e.name}
                        </p>
                        <div className="flex items-center space-x-3">
                          <div className="text-xs flex items-center text-slate-500 space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-4 h-4 text-slate-700"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                              />
                            </svg>

                            <span>{e.email}</span>
                          </div>
                          <div className="text-xs flex items-center text-slate-500 space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-4 h-4 text-slate-700"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                              />
                            </svg>
                            <span>{e.phone}</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 leading-6">
                          {e.address}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CreateBill;
