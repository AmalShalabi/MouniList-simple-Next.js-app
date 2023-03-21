import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Next.js is a React framework for building server-side rendered web
        applications. It provides developers with an efficient and flexible way
        to build modern web applications using React, Node.js, and a variety of
        other tools. One of the main benefits of Next.js is that it allows
        developers to build server-side rendered React applications with ease.
        This means that the initial HTML, CSS, and JavaScript required to render
        the page are generated on the server and sent to the client as a fully
        formed HTML page, rather than relying on client-side JavaScript to do
        the rendering.
      </p>
      <p className={styles.text}>
        This can help improve performance and search engine optimization, as
        well as providing a more seamless user experience. Next.js also provides
        a variety of other features, such as automatic code splitting, which can
        help improve application performance, and a built-in routing system,
        which can simplify the development process. It also provides support for
        serverless deployment and API routes, which can make it easier to build
        and deploy complex web applications.
      </p>
      <Link href="/mouni" className={styles.btn}>
        See Mouni Listing
      </Link>
    </div>
  );
}
