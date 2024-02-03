import { Header } from "./components/header";
import { Images } from "./components/images";
import { ProductInfo } from "./components/product-info";
import { useCart } from "./hooks";
import { Stats } from "./stats";
import type { Product, User } from "./types";

function App({ product, user }: { product: Product; user: User }) {
  const [cart, addToCart] = useCart();

  return (
    <div>
      <Header cart={cart} user={user} />

      <main className="grid place-items-center grid-cols-1 grid-rows-auto gap-5 text-[#] p-4">
        <section className="title-wrapper text-2xl text-center">
          <h1 className="title-text flex flex-col place-items-center">
            Assignment Help
            <span> Get Assignment Help From World's
               No.1 Assignment Help Company
            </span> 
          </h1>
        </section>
        <Stats/>
      </main>

      <footer className="text-center text-sm p-5 text-[#282e3e]">
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
