import styles from "./page.module.css";
import LoginForm from "@/components/LoginForm/LoginForm";
import SignUpForm from "@/components/SignUpForm/SignUpForm";

export default function Login() {
  return (
    <div className={styles.page}>
      <LoginForm />
      <SignUpForm />
    </div>
  );
}
