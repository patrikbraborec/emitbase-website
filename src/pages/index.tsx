import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";

import styles from "./index.module.css";
import Link from "@docusaurus/Link";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Documentation 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Emitbase | ${siteConfig.title}`}
      description="The open-source alerts and notifications solution for developers"
    >
      <HomepageHeader />
      <main>
        <section className={clsx("container", styles.mainSection)}>
          <div className={clsx(styles.codeBlock)}>
            <p>1️⃣ Start with an SQL query and set up a CRON job</p>
            <CodeBlock className="language-yaml">
              {"unfinished_registrations:\n"}
              {
                "  experssions: \"SELECT * FROM users WHERE status = 'activation_pending'\"\n"
              }
              {'  cron: "0 8 * * *"'}
            </CodeBlock>
          </div>

          <div className={clsx(styles.codeBlock)}>
            <p>
              2️⃣ Configure your channels, and if the SQL query returns any rows,
              messages will be sent to your channels
            </p>
            <CodeBlock className="language-yaml">
              {"unfinished_registrations:\n"}
              {"  email:\n"}
              {'    from: "it@awesomecompany.com"\n'}
              {'    to: "ceo@awesomecompany.com"\n'}
              {
                '    message: "We have some unfinished registrations in our platform!"\n'
              }
              {"  slack:\n"}
              {'    channel: "#general"\n'}
              {
                '    message: "We have some unfinished registrations in our platform!"\n'
              }
            </CodeBlock>
          </div>
        </section>
      </main>
    </Layout>
  );
}
