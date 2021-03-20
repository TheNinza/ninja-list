import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image width="70" height="70" src="/logo.svg" alt="" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
