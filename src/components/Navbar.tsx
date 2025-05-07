import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import QuickCart from "./QuickCart";
import { TransitionLink } from "@/utils/TransitionLink";


const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          {/* <Image
              src="/images/logo-black-md.png"
              alt="Logo"
              width={120}
              height={0}
            /> */}
            <h3 className="text-sm text-gray-950">LF DEMO APP</h3>
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* LINKS */}
        <div className="flex gap-6 text-gray-600">
          <TransitionLink href="/">Home</TransitionLink>
          <TransitionLink href="/"> Shop</TransitionLink>
          <TransitionLink href="/about">About</TransitionLink>
        </div>
        <div className='hidden xl:flex p-2 bg-slate-100 items-center rounded-xl'>
          <input type="text" placeholder="search..." className="bg-transparent outline-none"/>
          <Image src="/images/search.png" alt="" width={14} height={14}/>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
          <div className="flex items-center gap-2 text-sm">
            <QuickCart />
          </div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
