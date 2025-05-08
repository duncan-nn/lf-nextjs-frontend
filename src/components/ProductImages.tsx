"use client";

import Image from "next/image";
import { useState } from "react";

export interface ProductImage {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
}


const ProductImages = ({ items }: { items: ProductImage[] }) => {
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
        {items.map((item:ProductImage, i:number) => (
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
