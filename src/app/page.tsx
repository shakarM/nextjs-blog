import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="text-center item-center gap-6">
      <h1 className="text-center mb-6">
        This is a small application, uses NextJs in order to fetch API and
        adding tickets{" "}
      </h1>
      <Link
        className="bg-primary p-3 rounded-md hover:bg-blue-800 text-white transition-all ease delay-300"
        href="tickets"
      >
        View tickets
      </Link>

      <div className="mt-10 gap-4">
        <h1> This application is built by Shakar Lateef </h1>
        <p>
          Follow me on instagram{" "}
          <Link href="https://www.instagram.com/shakarbit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            @shakarbit
          </Link>
        </p>
        <p>
          {" "}
          Visit my portfolio website and see my projects there{" "}
          <Link href="shakarlateef.xyz"> Click here</Link>
        </p>
        <p>
          {" "}
          My github
          <Link href="https://github.com/shakarM"> shakaM</Link>
        </p>
      </div>
    </main>
  );
}
