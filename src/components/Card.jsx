import React from "react";

function Card() {
  return (
    <div className="border flex items-center gap-16 justify-evenly h-[18rem] w-auto">
      <div className="text-container p-5 flex flex-col  ">
        <h3 className="w-10 text-xl">Wooden Manimalistic Chair</h3>
        <small className="text-bold text-sm">Sale Up to</small>
        <h2 className="text-green-500">40% Off</h2>
        <a className="bg-yellow-400 text-black p-2 text-bold mt-2">Shop Now</a>
      </div>
      <img
        src="https://furniture-kabukithemes.myshopify.com/cdn/shop/products/12_copy.jpg?v=1450255351"
        className="object-cover w-52 h-full"
      ></img>
    </div>
  );
}

export default Card;
