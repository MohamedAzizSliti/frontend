import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BiHomeAlt2, BiLogOut } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../images/logo.png";
import { TbMap2 } from "react-icons/tb";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import "./SideBar.css";

export const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(0); // add state variable for selected menu item
  const menus = [
    { title: "Accueil", icon: <BiHomeAlt2 />, link: "/", id: 0 },
    { title: "Ordres", icon: <AiOutlineShoppingCart />, link: "/orders", id: 1 },
    { title: "Restaurants", icon: <TbMap2 />, link: "/restaurent", id: 2 },
    { title: "Préféré", icon: <MdOutlineFavoriteBorder />, link: "/prefere", id: 3 },
    { title: "Se Déconnecter", icon: <BiLogOut />, spacing: true, id: 4 },
  ];
  return (
    <div
      className={`bg-white h-max-h-full lg:p-5 lg:pt-8 ${
        open ? "lg:w-72 " : "lg:w-20"
      }  lg:relative duration-300 items-center sm:fixed sm:left-50 sm:top-0 sm:z-10  `}
    >
      <BsArrowLeftShort
        className={`bg-white text-color-orange text-3xl rounded-full absolute  ${
          !open && "rotate-180"
        }  -right-3 top-16 border border-color-orange `}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex">
        <img
          src={logo}
          alt="Logo"
          className={`rounded-full mb-12 block cursor-pointer bg-white duration-500  ${
            open && "rotate-[360deg]  "
          }`}
        />
      </div>

      <div className={`flex-1 rounded-md  ${open && "p-4"} lg:p-0`}>
        <ul>
          {menus.map((menu) => (
            <li
              className={` duration-200 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-color-pink hover:text-color-orange rounded-md mt-2 ${
                menu.spacing && "mt-12"
              } ${selected === menu.id ? "bg-color-pink text-color-orange scale-110" :"text-gray-300"}  `}
              key={menu.id}
              onClick={() => setSelected(menu.id)}
            >
              <Link to={menu.link}>
                <span className={`text-2xl block float-left`}>{menu.icon}</span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"} `}>{menu.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
