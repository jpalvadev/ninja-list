import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        {/* <img src="/logo.png" /> Don't use img tag, use Image Next tag, with width and height, provides lazy loading */}
        <Image src="/logo.png" alt="logo" width={128} height={77} />
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
}
