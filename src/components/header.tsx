import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import type { Cart, User } from "../types";
import { CartIcon, UserIcon } from "./icons";
import { CartDetails, UserDetails } from "./details";
import DarkMode from "./darkmode";

export const Header = ({ cart, user }: { cart: Cart; user?: User }) => {
  return (
    <header className="p-5 fixed w-[100vw] flex justify-between items-center">
      <img src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/logo-icon.svg" alt="" className="logo" />

      <DarkMode/>
    </header>
  );
};
