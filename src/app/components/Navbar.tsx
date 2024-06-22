import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <nav className="gap-4 flex p-3 ">
        <h1> Dashboard </h1>
        <Link href="//">Home</Link>
        <Link href="/tickets">Tickets</Link>
      </nav>
    </div>
  );
};

export default Navbar;
