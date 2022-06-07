import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  const res = await fetch(`https://api.w-b.dev/blog/`);
  const data = await res.json();
  return { props: { data } };
}

const buildCategories = (apiResponse) => {
  const categoriasSet = new Set();
  apiResponse.forEach((categoria) => {
    const categoryArray = categoria.post_category.split(", "); //First attempt to clear the cat string with space
    categoryArray.forEach((filteredCat) =>
      categoriasSet.add(filteredCat.toLocaleUpperCase())
    );
  });
  return Array.from(categoriasSet).sort((a, b) => (a > b ? 1 : -1));
};

const compareDescendingTimestamps = (a, b) => {
  // Note: `a - b` generates an ASCENDING ordering
  return a.post_timestamp < b.post_timestamp ? 1 : -1;
};

export default function Blog({ data }) {
  const [posts, setPosts] = useState([
    ...data.message
      .filter((el) => el.post_is_favorite)
      .sort(compareDescendingTimestamps),
  ]);
  const [categorias, setCategorias] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    setPosts(
      data.message
        .filter((el) =>
          filter
            ? el.post_category.toLocaleUpperCase().includes(filter)
            : el.post_is_favorite
        )
        .sort(compareDescendingTimestamps)
    );
  }, [filter]);

  useEffect(() => {
    //   setArtigos([...data.message]);
    setCategorias(buildCategories(data.message));
  }, [data.message]);

  return (
    <div className={styles.container}>
      {/*<Head>*/}
      {/*  <title>codein.ca</title>*/}
      {/*  <meta name="description" content="codein.ca" />*/}
      {/*  <link rel="icon" href="/favicon.ico" />*/}
      {/*</Head>*/}

      <main className={styles.main}>
        <h1>Blog</h1>

        <section className={styles.blogHeader}>
          <p>
            a brain dump of some of my{" "}
            <Link href={"https://www.linkedin.com/in/brasileiro"}>
              👋🏽 experiences
            </Link>
            .
          </p>
          {/*<ol>*/}
          {/*  <li>Enable users to sign up (AWS Cognito)</li>*/}
          {/*  <li>Create newsletter flow (AWS SES, mail list feature)</li>*/}
          {/*  <li>*/}
          {/*    Enable authenticated users to add content (AWS Lambda, API*/}
          {/*    Gateway, DataStax AstraDB - Apache Cassandra DBaaS)*/}
          {/*  </li>*/}
          {/*</ol>*/}
        </section>
        {/*<Link href="https://linkedin.ca/in/brasileiro">Daniel @LinkedIn</Link>*/}
        <section className={styles.blogBody}>
          <h2 className={styles.blogBodyTitle}>
            Posts
            <select
              name="posts-selector"
              id="posts-selector"
              className={styles.postsSelector}
              defaultValue={"__foo__"}
              onChange={(el) => setFilter(el.target.value)}
            >
              <option value="__foo__" disabled={true}>
                Select a tag
              </option>
              {categorias.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </h2>
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
