import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.title}>
        <h1>Homepage</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
          consequuntur distinctio voluptatum quas iusto vero nobis, ipsa velit
          nam rem natus magnam ex, modi adipisci quos id architecto, deleniti
          dolor.
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
          consequuntur distinctio voluptatum quas iusto vero nobis, ipsa velit
          nam rem natus magnam ex, modi adipisci quos id architecto, deleniti
          dolor.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
