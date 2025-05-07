import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import { Suspense } from "react";

const Home = async () => {

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <Suspense fallback={<Skeleton/>}>
        <ProductList />
      </Suspense>
    </div>
  );
};

export default Home;
