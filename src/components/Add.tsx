"use client";


import { useState } from "react";
import { useCart } from '@/hooks/use-cart'

type ProductOption = {
    name: string;
    value: string;
};

const Add = ({
    product_id,
    name,
    price,
    stock_status,
    image_src,
    product_options
}: {
    product_id: number;
    name: string;
    price: string;
    stock_status: string;
    image_src: string;
    product_options: ProductOption[];
}) => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({
    id: product_id,
    name: name,
    price: Number(price),
    stock_status: stock_status,
    image: image_src,
    product_options: product_options,
    quantity: quantity
  });
  const {
    addItem: addToCart,
  } = useCart()

  // // TEMPORARY
  const stockNumber = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleAddToCart = () => {
    setProduct(prev => ({
      ...prev,
      quantity: quantity,
    }));
    addToCart(product)
  };


  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("d")}
              disabled={quantity===1}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("i")}
              disabled={quantity===stockNumber}
            >
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-xs">Product is out of stock</div>
          ) : (
            <div className="text-xs">
              Only <span className="text-orange-500">{stockNumber} items</span>{" "}
              left!
              <br /> {"Don't"} miss it
            </div>
          )}
        </div>
        <button
         onClick={() => handleAddToCart()}
        //   disabled={isLoading}
          className="cursor-pointer w-36 text-sm rounded-3xl ring-1 ring-gray-900 text-gray-900 py-2 px-4 hover:bg-gray-900 hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
