import Link from "next/link";
import Image from "next/image";

export default function NotInUseLayout({ children }) {
  return (
    <>
      <header className="header">
        <Link href={"/"}>
          <a>
            <Image
              priority={true}
              src="/codein-logo.webp"
              alt="codein.ca photo"
              width={425 / 6}
              height={309 / 6}
            />
          </a>
        </Link>
        <section className="sidebar-links">
          <Link passHref href={"https://www.paypal.com/paypalme/w3b3"}>
            <a target={"_blank"} className={"alwaysShow"} rel="noreferrer">
              Would you buy me ☕️ coffee?
            </a>
          </Link>
          <Link href={"/login"}>Login</Link>
          <Link href={"https://github.com/w-b-dev"}>🦧Repos</Link>
          <Link href={"https://www.linkedin.com/my-items/saved-posts/"}>
            🎗Saved
          </Link>
          <Link
            href={
              "https://aws.amazon.com/architecture/?nc2=h_ql_exm&awsf.quickstart-architecture-page-filter=highlight%23new"
            }
          >
            🙈AWS
          </Link>
          <Link
            href={
              "https://docs.microsoft.com/en-us/azure/architecture/patterns/"
            }
          >
            🙊Cloud
          </Link>
          <Link
            href={
              "https://aws.amazon.com/architecture/?nc2=h_ql_exm&awsf.quickstart-architecture-page-filter=highlight%23new"
            }
          >
            Cache
          </Link>
          <Link
            href={
              "https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design"
            }
          >
            API
          </Link>
          <Link href={"https://astra.datastax.com/"}>AstraDB</Link>
          <Link href={"https://www.algoexpert.io"}>algoexpert</Link>
          <Link href={"https://plataforma.fullcycle.com.br"}>fullcycle</Link>
          <Link href={"https://testingjavascript.com"}>testingjavascript</Link>
          <Link href={"https://learn.acloud.guru"}>acloud</Link>
          <Link href={"https://triplebyte.com/candidates/challenges"}>
            triplebyte
          </Link>
          <Link href={"https://hired.com/profile/build/preview"}>hired</Link>
          <Link href={"https://www.executeprogram.com/courses"}>
            executeprogram
          </Link>
          <Link
            href={
              "https://docs.datastax.com/en/cql-oss/3.x/cql/cql_reference/cql_data_types_c.html"
            }
          >
            cql data types
          </Link>
          <Link
            href={
              "https://cassandra.apache.org/doc/latest/cassandra/data_modeling/data_modeling_refining.html"
            }
          >
            cassandra.apache.org
          </Link>
          <Link
            href={
              "https://docs.datastax.com/en/cassandra-oss/3.x/cassandra/architecture/archIntro.html"
            }
          >
            docs.datastax.com
          </Link>
          <Link
            href={
              "https://cwiki.apache.org/confluence/display/CASSANDRA2/Durability"
            }
          >
            commitlog
          </Link>
          <Link
            href={
              "https://www.instaclustr.com/blog/cassandra-data-partitioning/"
            }
          >
            instaclustr
          </Link>
          <Link
            href={
              "https://www.datastax.com/blog/spof-0-why-every-node-cassandra-cluster-same"
            }
          >
            SPOF
          </Link>
          <Link
            href={
              "https://www.destroyallsoftware.com/screencasts/catalog/a-compiler-from-scratch"
            }
          >
            destroyallsoftware
          </Link>
        </section>
      </header>
      <main>{children}</main>
    </>
  );
}
