import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Images } from "./components/images";
import { ProductInfo } from "./components/product-info";
import { useCart } from "./hooks";
import { Stats } from "./components/stats";
import type { Product, User } from "./types";
import { RowOEA } from "./components/row_1_oea";
import { RowAHS } from "./components/row_2_ahs";
import { RowAHF } from "./components/row_3_ahf";
import { Testimonials } from "./components/row_4_testimonials";
import { Form } from "./components/form";

function App({ product, user }: { product: Product; user: User }) {
  const [cart, addToCart] = useCart();

  return (
    <div>
      <Header cart={cart} user={user} />

      <main className="p-4 flex flex-col place-content-center place-items-center pt-[7em]">
        <div className="title-wrapper text-2xl text-center">
          <h1 className="title-text flex flex-col gap-3 place-items-center">
            <span className="text-[1.3em] font-black">Assignment Help</span>
            <span className="text-[0.6em] font-black"> Get Assignment Help From World's
               No.1 Assignment Help Company
            </span> 
          </h1>
        </div>
        <div className="main-content grid place-items-center grid-cols-1 grid-rows-auto gap-5 w-[90%] md:w-[80%]">
          <Stats/>
          <button className="p-4 rounded-[1em]">
              Hire an Expert
          </button>
          <div className="scrollers-home flex flex-col gap-8 w-[100%]">
          <RowOEA/>
          <RowAHS/>
          <RowAHF/>
          <Testimonials/>
          <div className="form-container">
          <Form/>
          </div>
          </div>
          </div>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
