import React from "react";

function BottomCard() {
  return (
    
    <div className="flex justify-evenly border mt-5 items-center shadow bg-[#f8f8f8] w-[90%] mb-10">
      <div className="col flex flex-col">
        <h1 className="font-bold text-xl">Bose Bluetooth</h1>
        <h1 className="font-bold text-xl">Wireless Headphones</h1>
        <p className="text-gray-400">
          Crisp powerful sound from the best sounding wireless headphone in its
          class
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className="line-through text-xl">$260.50</h3>
        <h2 className="text-green-500 text-3xl">$219.05</h2>
        <a className="bg-yellow-400 text-black p-2 text-bold mt-2"><strong>Shop Now</strong></a>
      </div>
      <img
        className="w-36  object-contain"
        src="./src/assets/bose-soundlink-bluetooth.png"
      ></img>
    </div>
  );
}

export default BottomCard;
