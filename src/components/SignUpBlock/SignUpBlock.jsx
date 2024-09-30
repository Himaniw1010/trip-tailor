import Button from "../Button/Button";
import styles from "./SignUpBlock.module.css";

function SignUpBlock(props) {
  return (
    <div className={styles.wrapper}>
      <h3>Join the TripTailor Community</h3>
      <Button label="Sign up" type="red" size="xl"/>
    </div>
  );
}

export default SignUpBlock;
