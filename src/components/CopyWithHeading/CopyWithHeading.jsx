

import styles from "./CopyWithHeading.module.css";


function CopyWithHeading({heading, copy}) {
  return (
    <div className={styles.wrapper}>
      <h1>{heading}</h1>
      <p>{copy}</p>
    </div>
  );
}

export default CopyWithHeading;
