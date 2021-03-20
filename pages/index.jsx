import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          nostrum quidem, minima obcaecati repudiandae, eaque in earum eius
          voluptate perspiciatis doloribus iste sequi? Optio in iste, eveniet
          sequi ex ratione.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          nostrum quidem, minima obcaecati repudiandae, eaque in earum eius
          voluptate perspiciatis doloribus iste sequi? Optio in iste, eveniet
          sequi ex ratione.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}