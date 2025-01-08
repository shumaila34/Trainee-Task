import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link href="/" className="">
          Home
        </Link>
        <Link href="/about">About</Link>
        <Link href="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Navbar;
