import { Header } from "./components/header";
import { Images } from "./components/images";
import { ProductInfo } from "./components/product-info";
import { useCart } from "./hooks";
import { Stats } from "./components/stats";
import type { Product, User } from "./types";
import { RowOEA } from "./components/row_1_oea";

function App({ product, user }: { product: Product; user: User }) {
  const [cart, addToCart] = useCart();

  return (
    <div>
      <Header cart={cart} user={user} />

      <main className="grid place-items-center grid-cols-1 grid-rows-auto gap-5 text-[#] p-4">
        <div className="title-wrapper text-2xl text-center">
          <h1 className="title-text flex flex-col gap-3 place-items-center">
            <span className="text-[1.3em]">Assignment Help</span>
            <span className="text-[0.6em]"> Get Assignment Help From World's
               No.1 Assignment Help Company
            </span> 
          </h1>
        </div>
        <Stats/>
        <button className="p-4 rounded-[1em]">
            Hire an Expert
        </button>
        <RowOEA/>
      </main>

      <footer className="text-center text-sm p-5">
        Made with ♥ in&nbsp;
        <a href="https://codux.com">Codux</a>
        &nbsp;with&nbsp;
        <a href="https://radix-ui.com">RadixUI</a>
        &nbsp;and&nbsp;
        <a href="https://tailwindcss.com">TailwindCSS</a>
      </footer>
    </div>
  );
}

export default App;
