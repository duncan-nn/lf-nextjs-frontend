"use client";

import { Product } from "@/utils/models";
import Image from "next/image";
import { useState } from "react";


const ProductImages = ({ items }: { items: Product["images"] }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-130 relative">
        <Image
          src={items[index].src}
          alt=""
          fill
          sizes="30vw"
          className="object-cover"
        />
      </div>
      <div className="flex gap-4 mt-2">
        {items.map((item:any, i:number) => (
          <div
            className="w-1/4 h-40 relative gap-4 mt-8 cursor-pointer"
            key={item.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.src}
              alt=""
              fill
              sizes="30vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
