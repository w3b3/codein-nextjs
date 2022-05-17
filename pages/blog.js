import styles from "../styles/Blog.module.css";
import Head from "next/head";
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
          <Link href="https://linkedin.ca/in/brasileiro">
            Hi there! I 🖍 here and on @LinkedIn
          </Link>
        </section>
        <section className={styles.blogContainer}>
          {posts.map((el, i) => (
            <article className={styles.post} key={el.post_id}>
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
