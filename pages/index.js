import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NoHeaderLayout from "../components/no-header-layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>codein.ca</title>
        <meta name="description" content="codein.ca" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href={"blog"} passHref>
          <Image
            priority={true}
            quality={100}
            src="/codein-logo.webp"
            alt="codein.ca photo"
            width={425}
            height={309}
            placeholder={"blur"}
            blurDataURL={"/codein-logo-blur.webp"}
          />
        </Link>

        <h3>🚧 under development in 🇨🇦</h3>
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <NoHeaderLayout>{page}</NoHeaderLayout>;
};
