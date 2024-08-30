import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Layout from "@/components/Layout";
import NewCollection from "@/components/NewCollection";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center">
          <Carousel />
          <Banner />
          <NewCollection />
          <Featured />
          <Categories />
        </div>
      </Layout>
    </>
  );
}
