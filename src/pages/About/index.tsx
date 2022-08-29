import containerStyles from "../../styles/containers.module.scss";

import styles from "./styles.module.scss";

export function AboutPage() {
  return (
    <main className={containerStyles.pageContainer}>
      <h1 className={styles.title}>About Us - Page</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        reiciendis facilis nihil libero velit voluptatum? Odit aut, blanditiis
        soluta eos, officiis, quaerat alias omnis accusamus optio error
        perferendis voluptatem repellat!
      </p>
    </main>
  );
}
