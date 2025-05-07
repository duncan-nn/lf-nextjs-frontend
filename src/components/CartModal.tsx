"use client";

import Image from "next/image";
import { useCart } from '@/hooks/use-cart'

const CartModal = () => {
  const {
    items: cartItems,
    removeItem: removeFromCart,
    cartTotal,
  } = useCart()


// console.log("cart items: " + JSON.stringify(cartItems))



  const handleCheckout = async () => {
    return
  };

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {cartItems.length === 0 ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            {cartItems.map((item) => (
              <div className="flex gap-4" key={item.id}>
                {item.image && (
                  <Image
                    src={item.image}
                    alt=""
                    width={72}
                    height={96}
                    className="object-cover"
                  />
                )}
                <div className="flex flex-col justify-between w-full">
                  {/* TOP */}
                  <div className="">
                    {/* TITLE */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">
                        {item.name}
                      </h3>
                      <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                        {item.quantity && item.quantity > 1 && (
                          <div className="text-xs text-green-500">
                            {item.quantity} x{" "}
                          </div>
                        )}
                        ${item.price}
                      </div>
                    </div>
                    {/* DESC */}
                    <div className="text-sm text-gray-500">
                      {item.stock_status}
                    </div>
                  </div>
                  {/* BOTTOM */}
                  <div className="flex justify-between text-sm">
                    {/* <span className="text-gray-500">Qty. {item.quantity}</span> */}
                    {item.product_options.length > 0 && item.product_options.map((option) => (
                      <span
                        key={option.value}
                        className="text-gray-500">
                          {option.value}
                      </span>
                    ))}
                    <span
                      className="text-blue-500"
                      // style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">${cartTotal}</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button
                className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                // disabled={isLoading}
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
