/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="lg:flex lg:h-screen items-center justify-center overflow-auto">
      <div className="bg-white w-full h-full lg:h-fit lg:w-fit lg:min-w-[500px] overflow-hidden">
        <img
          src="https://assets.keap.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_1,f_auto,h_395,q_95,w_569/v1590531768/customer-service/customer%20experience/GettyImages-1197547531.jpg"
          alt=""
          className="h-64 object-cover w-full"
        />
        <div className="text-center p-8 font-poppins">
          <h1 className="text-2xl text-slate-700 font-extrabold">
            95<span className="font-light">Bills.com</span>
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Generate invoices in seconds.
          </p>
        </div>
        <div className="p-8 font-poppins">
          <p className="text-sm font-medium text-slate-600 text-center">
            Sign in to get started 🎉
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <button className="flex justify-center items-center bg-slate-100 px-6 py-3 rounded-md">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png"
                alt=""
                className="h-5 w-5 mr-3"
              />
              <span className="text-sm font-medium text-slate-700">Google</span>
            </button>
            <button className="flex justify-center items-center bg-slate-100 px-6 py-3 rounded-md">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt=""
                className="h-5 w-5 mr-3"
              />
              <span className="text-sm font-medium text-slate-700">Github</span>
            </button>
          </div>

          <p className="mt-14 text-xs text-center text-slate-500">
            © 2021 95bills.com
          </p>
        </div>
      </div>
    </main>
  );
}
