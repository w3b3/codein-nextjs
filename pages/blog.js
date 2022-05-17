import styles from "../styles/Blog.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps(context) {
  const res = await fetch(`https://api.w-b.dev/blog/`);
  const data = await res.json();
  return { props: { data } };
}

export default function Blog({ data }) {
  const posts = data?.message ?? [];
  return (
    <div className={styles.container}>
      <Head>
        <title>codein.ca</title>
        <meta name="description" content="codein.ca" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <h1 className={styles.h1}>
            <Image
              className={styles.blogImage}
              src="/daniel_IMG_0655-with-certs.png"
              alt="Daniel LinkedIn profile photo"
              width={70}
              height={70}
            />{" "}
            🖍🧘🏽‍♀️🤔 + <a href="https://linkedin.ca/in/brasileiro">@LinkedIn</a>
          </h1>
        </section>
        <section className={styles.blogContainer}>
          {posts.map((el, i) => (
            <article className={styles.post} key={el.post_id}>
              {/*<span className="timestamp">*/}
              {/*  {new Date(el.post_timestamp).toLocaleDateString("en", {*/}
              {/*    weekday: "long",*/}
              {/*    hour: "2-digit",*/}
              {/*    day: "2-digit",*/}
              {/*    hour12: true,*/}
              {/*    month: "long",*/}
              {/*  })}*/}
              {/*</span>{" "}*/}
              <p className={styles.content}>{el.post_title}</p>
              {el.post_body && <Link href={el.post_body}>{el.post_body}</Link>}
              <button disabled>Edit</button>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
