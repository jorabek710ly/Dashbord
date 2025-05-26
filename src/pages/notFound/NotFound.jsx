import React from "react";
import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";

const NotFound = () => {
  return (
    <section className="bg-[#0d1117] text-white min-h-screen flex flex-col justify-center items-center px-4">
      <div className="max-w-xl w-full text-center space-y-6">
                <div className="mt-6">
          <img
            src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
            alt="Not found GIF"
            className="mx-auto w-60 md:w-72 rounded-lg"
          />
        </div>
       
        <p className="text-2xl md:text-4xl font-semibold">Bunday ma'lumot topilmadi</p>
        <p className="text-[#8b949e] text-sm md:text-base">
          Siz izlayotgan sahifa mavjud emas yoki o‘chirilgan bo‘lishi mumkin. 
          Iltimos, bosh sahifaga qayting yoki boshqa sahifani sinab ko‘ring.
        </p>



        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#30363d] rounded-md text-sm hover:bg-[#161b22] transition-colors"
          >
            <IoChevronBackSharp className="text-lg" />
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

