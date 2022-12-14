import styles from "./NewDraws.module.css";

const NewDraws = () => {
  return (
    <div className={styles.container}>
      <div className={styles.latestDraws}>
        <h1 className={styles.header}>Latest draws</h1>
      </div>
      <div className={styles.draws}>
        <div className={styles.draw}>
          <h2 className={styles.drawHeader}>Full year tuition paid</h2>
          <p className={styles.para}>Let's help your childs education</p>
          <a
            href='https://tre.ng/current-draws/'
            target='_blank'
            rel='noreferrer'
          >
            <button className={styles.drawBtn}>Participate</button>
          </a>
        </div>
        <div className={styles.draw}>
          <h2 className={styles.drawHeader}>Win #10,000 weekly</h2>
          <p className={styles.para}>This is a weekly raffle</p>
          <a
            href='https://tre.ng/current-draws/'
            target='_blank'
            rel='noreferrer'
          >
            <button className={styles.drawBtn}>Participate</button>
          </a>
        </div>
        <div className={styles.draw}>
          <h2 className={styles.drawHeader}>Win #250,000 monthly</h2>
          <p className={styles.para}>
            This is a monthly raffle draw that runs through the year
          </p>
          <a
            href='https://tre.ng/current-draws/'
            target='_blank'
            rel='noreferrer'
          >
            <button className={styles.drawBtn}>Participate</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewDraws;
