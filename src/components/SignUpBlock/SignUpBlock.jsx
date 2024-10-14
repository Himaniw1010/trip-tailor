"use client"
import useDeviceType from "@/hooks/useDeviceType";
import Button from "../Button/Button";
import styles from "./SignUpBlock.module.css";

function SignUpBlock(props) {
  const deviceType = useDeviceType()
  return (
    <div className={styles.wrapper}>
      <h3>Join the TripTailor Community</h3>
      <Button link="/login" label="Sign up" variant="red" size={deviceType == "mobile" ? "md" : deviceType == "tablet" ? "lg" : "xl"} />
    </div>
  );
}

export default SignUpBlock;
