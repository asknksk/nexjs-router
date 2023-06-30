import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Next.js Router</h1>
      <ul>
        <li>blog</li>
        <li>about</li>
        <li>customUrl</li>
      </ul>
    </div>
  );
}
