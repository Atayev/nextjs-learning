import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          id, laborum vero aut distinctio officia tenetur nisi quasi odio
          similique doloremque placeat. Tenetur accusantium cupiditate, at neque
          quis nihil maxime.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          id, laborum vero aut distinctio officia tenetur nisi quasi odio
          similique doloremque placeat. Tenetur accusantium cupiditate, at neque
          quis nihil maxime.
        </p>
        <Link href='/ninjas' className={styles.btn}>
          See Ninjas Listsings
        </Link>
      </div>
    </>
  );
}
