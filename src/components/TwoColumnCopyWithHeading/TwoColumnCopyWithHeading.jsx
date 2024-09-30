'use client'

import styles from "./TwoColumnCopyWithHeading.module.css";


function TwoColumnCopyWithHeading({columnOne, columnTwo}) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.col}>
        <h1>{columnOne.heading}</h1>
        <p>{columnOne.copy}</p>
      </div>
      <div className={styles.col}>
        <h1>{columnTwo.heading}</h1>
        <p>{columnTwo.copy}</p>
      </div>
    </div>
  );
}

export default TwoColumnCopyWithHeading;
