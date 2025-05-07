"use client";

import React, { useState } from "react";
import Add from "./Add";

type ProductOption = {
    name: string;
    value: string;
};
type Attribute = {
    id: number;
    name: string;
    slug: string;
    position: number;
    visible: boolean;
    variation: boolean;
    options: string[];
};

const CustomizeProducts = ({
    product_id,
    name,
    price,
    stock_status,
    image_src,
    attributes
}: {
    product_id: number;
    name: string;
    price: string;
    stock_status: string;
    image_src: string;
    attributes: Attribute[];
}) => {

    const [selectedOptions, setSelectedOptions] = useState<ProductOption[]>([]);
    const handleVariations = (productOption: ProductOption) => {
        setSelectedOptions((prevOptions) => {
            const filtered = prevOptions.filter(
              (option) => option.name !== productOption.name
            );
            return [...filtered, productOption];
          });
        // console.log("Selected Options!!!: ", selectedOptions)
    };

  return (
    <div className="flex flex-col gap-6">
      {attributes.map((attribute) => (
        <div className="flex flex-col gap-4" key={attribute.slug}>
          <h4 className="font-medium">Choose a {attribute.name}</h4>
          <ul className="flex items-center gap-3 flex-wrap">
            {attribute.options.map((option) => {

                const isOptionSelected = selectedOptions.some(
                  (selected) =>
                    selected.name === attribute.name && selected.value === option
                );

                return (
                  <li
                    key={option}
                    onClick={() =>
                      handleVariations({ name: attribute.name, value: option })
                    }
                    className={`transition duration-200 ring-1 ring-gray-600 text-gray-600 rounded-md py-1 px-4 text-sm cursor-pointer 
                      ${isOptionSelected ? "bg-pink-300" : "hover:bg-pink-100"}`}
                  >
                    {option}
                  </li>
                );
              })}
          </ul>
        </div>
      ))}
      <Add
        product_id = {product_id}
        name = {name}
        price = {price}
        stock_status = {stock_status}
        image_src = {image_src}
        product_options = {selectedOptions}
      />
    </div>
  );
};

export default CustomizeProducts;
