import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/actions/woocommerce";
import { Product } from "@/utils/models";
// import Pagination from "./Pagination";

const ProductList = async () => {

const products = await getProducts()


  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products.length > 0 && products.map((product: Product) => (
        <Link
          href={"/product/" + product.slug}
          key={product.id}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-100">
            <Image
              src={product.images[0].src || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.images[1] && (
              <Image
                src={product.images[1].src || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between items-baseline">
            <span className="font-thin text-xs text-gray-500 uppercase">{product.name}</span>
            <span className="text-sm">${product.price}</span>
          </div>
          {/* {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "shortDesc"
                  )?.description || ""
                ),
              }}
            ></div>
          )} */}
          {/* <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button> */}
        </Link>
      ))}
      {/* {searchParams?.cat || searchParams?.name ? (
        <Pagination
          currentPage={res.currentPage || 0}
          hasPrev={res.hasPrev()}
          hasNext={res.hasNext()}
        />
      ) : null} */}
    </div>
  );
};

export default ProductList;
