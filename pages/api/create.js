import bill from "@/db/bill";
import connectDatabase from "@/db/connect";

export default async function handler(req, res) {
  await connectDatabase();

  const bill = bill.create({
    status: "due",
    customer: {
      name: "John Doe",
      email: "",
      address: "",
      phone: "",
    },
    dueDate: new Date(),
    amount: 0,
    products: [
      {
        name: "",
        quantity: 0,
        price: 0,
      },
    ],
  });
}
