import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light cBg-color">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src="/logo.png" alt="Logo" width="50" />
          </a>

          {/* Search Bar */}
          <form className="form-inline my-2 my-lg-0">
            <div className="d-flex bg-light p-2 rounded-pill">
              <input
                className="form-control outline-none mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-light w-5 my-2 my-sm-0 rounded-pill"
                type="submit"
              >
                <AiOutlineSearch className="w" />
              </button>
            </div>
          </form>

          {/* Profile Link */}
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <AiOutlineShoppingCart
                  style={{ fontSize: "28px" }}
                  className="text-light "
                />{" "}
                {/* Cart Icon */}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <AiOutlineHeart
                  style={{ fontSize: "28px" }}
                  className="text-light"
                />{" "}
                {/* Heart Icon */}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <AiOutlineUser
                  style={{ fontSize: "28px" }}
                  className="text-light"
                />{" "}
                {/* User Icon */}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
