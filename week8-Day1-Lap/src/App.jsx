import { useState } from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import SmallCard from "./components/SmallCard";
import ItemCard from "./components/ItemCard";
import BottomCard from "./components/BottomCard";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-center items-center mt-10 gap-16 flex-wrap">
        <Card></Card>
        <SmallCard></SmallCard>
      </div>
      <div className="flex flex-col  items-start justify-center mt-10 px-64 text-xl font-bold">
        <h2 className="text-left">Top Catageories Of The Month</h2>
        <hr className="w-full mt-2"></hr>
      </div>
      <div className="flex justify-center items-center gap-10 flex-wrap mt-10 px-3">
        <ItemCard
          itemName="Electronics"
          itemImg="https://nouthemes.net/html/martfury/img/categories/shop/5.jpg"
          itemLinks={[
            "Tv",
            "Air Conditioners",
            "Washing Meachines",
            "Audio & theaters",
            "Office Electronics",
          ]}
        ></ItemCard>
        <ItemCard
          itemName="Clothings"
          itemImg="https://nouthemes.net/html/martfury/img/categories/shop/1.jpg"
          itemLinks={["Womens", "Mens", "Bags & Backpacs", "Accessories"]}
        ></ItemCard>
        <ItemCard
          itemName="Computers"
          itemImg="https://nouthemes.net/html/martfury/img/categories/shop/9.jpg"
          itemLinks={[
            "Desktop PC",
            "LapTop",
            "PC Gaming",
            "Storage & Memory",
            "PC Components",
          ]}
        ></ItemCard>
        <ItemCard
          itemName="Home & Kitchen"
          itemImg="https://nouthemes.net/html/martfury/img/categories/shop/2.jpg"
          itemLinks={[
            "Funitures",
            "Decor",
            "Cookwares",
            "Untensil & Gadgets",
            "Garden Tools",
          ]}
        ></ItemCard>
        <ItemCard
          itemName="Healthy & Beauty"
          itemImg="https://nouthemes.net/html/martfury/img/categories/shop/10.jpg"
          itemLinks={[
            "MakeUp",
            "Skin Care",
            "Hair Care",
            "Tools & Equipments",
            "Perfumes",
          ]}
        ></ItemCard>
        <ItemCard
          itemName="Jewelry & Watch"
          itemImg="https://nouthemes.net/html/martfury/img/categories/shop/6.jpg"
          itemLinks={[
            "Pendant",
            "Necklace",
            "Watch",
            "Bracelets",
            "Accessories",
          ]}
        ></ItemCard>
      </div>
      <div className="flex justify-center items-center">
      <BottomCard></BottomCard>
      </div>
    </>
  );
}

export default App;
