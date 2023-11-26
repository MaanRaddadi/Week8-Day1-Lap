import React from "react";

function BottomCard() {
  return (
    
    <div className="flex justify-evenly border mt-5 items-center shadow bg-[#f8f8f8] w-[90%]">
      <div className="col flex flex-col">
        <h3 className="font-bold">Bose Bluetooth</h3>
        <h3 className="font-bold">Wireless Headphones</h3>
        <p className="text-gray-400">
          Crisp powerful sound from the best sounding wireless headphone in its
          class
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className="line-through">$260.50</h3>
        <h2 className="text-green-500">$219.05</h2>
        <a className="bg-yellow-400 text-black p-2 text-bold mt-2">Shop Now</a>
      </div>
      <img
        className="w-36  object-contain"
        src="./src/assets/bose-soundlink-bluetooth.png"
      ></img>
    </div>
  );
}

export default BottomCard;
