import React from "react";
import Item from "./Item";

function ItemCard({ itemImg, itemName, itemLinks }) {
  return (
    <div className="flex border min-h-[10rem] max-h-[10rem] p-5 py-3 max-w-[24rem] min-w-[22rem]">
      <img src={itemImg} className="w-36 max-h-[9rem] object-contain"></img>
      <div className="flex flex-col justify-center px-5 ">
        <h3 className="font-bold mt-2">{itemName}</h3>
        <ul className="flex flex-col item-center mb-2">
          {itemLinks.map((item, index) => {
            console.log(item);
            return (
              <li key={index}>
                <Item linkName={item} className="text-sm"></Item>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ItemCard;
