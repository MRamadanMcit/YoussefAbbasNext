import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <h1>Hello Homepage</h1>
      <div>Welcome to next Js</div>
      <div>
        <Link href="/about">About</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
}
