import { getProduct } from "@/actions/woocommerce";
import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";

interface PageProps {
  params: {
    slug: string;
  };
}
const SinglePage = async ({ params }: PageProps) => {
  // const { slug } = params;

  const product = await getProduct(params.slug)

  if (!product) {
    return notFound();
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row lg:justify-center gap-16">
      {/* IMG */}
      <div className="w-full lg:w-2/6 lg:sticky top-20 h-max">
        <ProductImages items={product.images} />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-3/6 flex flex-col gap-6">
        <h1 className="text-4xl font-medium uppercase">{product.name}</h1>
        <div
          className="text-sm text-gray-500"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              product.description
            ),
          }}
        ></div>
        <div className="h-[2px] bg-gray-100" />
        {product.on_sale === false ? (
          <h2 className="font-medium text-2xl">${product.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.regular_price}
            </h3>
            <h2 className="font-medium text-2xl">
              ${product.price}
            </h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.attributes.length > 0 ? (
          <CustomizeProducts
            product_id = {product.id}
            name = {product.name}
            price = {product.price}
            stock_status = {product.stock_status}
            image_src = {product.images[0].src}
            attributes={product.attributes}
            // variants={product.variations}
            // productOptions={product.productOptions}
          />
        ) : (
          <Add
            product_id = {product.id}
            name = {product.name}
            price = {product.price}
            stock_status = {product.stock_status}
            image_src = {product.images[0].src}
            product_options = {[]}
            // variantId="00000000-0000-0000-0000-000000000000"
            // stockNumber={product.stock?.quantity || 0}
          />
        )}
        <div className="h-[2px] bg-gray-100" />
        {/* {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))} */}
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
        <h1 className="text-2xl">User Reviews</h1>
        {/* <Suspense fallback="Loading...">
          <Reviews productId={product._id!} />
        </Suspense> */}
      </div>
    </div>
  );
};

export default SinglePage;
