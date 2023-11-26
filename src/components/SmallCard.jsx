import React from "react";

function SmallCard() {
  return (
    <div className="border h-[18rem] flex flex-col items-center justify-end gap-4 px-5">
      <h3 className="font-bold">Giordano</h3>
      <h5 className="text-2xl w-full">Pack 5 T-shirts for Summer</h5>
      <h6 className="font-bold w-full text-center whitespace-nowrap">Starting At <span className="text-red-600 whitespace-nowrap">99.99$</span></h6>
      <img
        src="./src/assets/clothes.png"
        className="object-contain  w-44"
      ></img>
    </div>
  );
}

export default SmallCard;
