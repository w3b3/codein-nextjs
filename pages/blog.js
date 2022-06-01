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
        <h1>Blog</h1>

        <section className={styles.blogHeader}>
          <p>a brain dump of some of my experiences. what&apos;s next?</p>
          <ol>
            <li>Add category dropdown to enable post filtering by tags</li>
            <li>Enable users to sign up (AWS Cognito)</li>
            <li>Create newsletter flow (AWS SES, mail list feature)</li>
            <li>
              Enable authenticated users to add content (AWS Lambda, API
              Gateway, DataStax AstraDB - Apache Cassandra DBaaS)
            </li>
          </ol>
        </section>
        {/*<Link href="https://linkedin.ca/in/brasileiro">Daniel @LinkedIn</Link>*/}
        <section className={styles.blogBody}>
          <h2 className={styles.blogBodyTitle}>Posts</h2>
          {posts.map((el, i) => (
            <article className={styles.post} key={el.post_id}>
              <p className={styles.content}>{el.post_title}</p>
              {el.post_body && <Link href={el.post_body}>{el.post_body}</Link>}
              {/*<button disabled className={styles.postButton}>*/}
              {/*  Edit*/}
              {/*</button>*/}
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
