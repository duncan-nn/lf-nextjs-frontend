"use client";

import React from 'react'
import { useState } from "react";
import Image from "next/image";
import CartModal from './CartModal';
import { useCart } from '@/hooks/use-cart'

function QuickCart() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const {
      items: cartItems,
    } = useCart()

  return (
    <div className="relative">
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image src="/images/cart.png" alt="" width={22} height={22} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-pink-400 rounded-full text-white text-sm flex items-center justify-center">
          {cartItems.length}
        </div>
      </div>
        {isCartOpen && <CartModal />}
    </div>
  )
}

export default QuickCart