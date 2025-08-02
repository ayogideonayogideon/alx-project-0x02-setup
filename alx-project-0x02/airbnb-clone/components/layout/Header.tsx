import Link from 'next/link';

const Header = () => (
  <header className="flex items-center justify-between p-4 text-white bg-blue-600">
    <h1 className="text-xl font-bold">ALX Project Header</h1>
    <nav className="flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/home">/home</Link>
      <Link href="/about">/about</Link>
      <Link href="/posts">/posts</Link>
      <Link href="/users">/users</Link>
    </nav>
  </header>
);

export default Header;