
import styles from "./page.module.css";
import LoginForm from "@/components/LoginForm/LoginFOrm";
import SignUpForm from "@/components/SignUpForm/SignUpForm";

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export default function Login() {

  const cookieStore = cookies()
  const isLoggedIn = cookieStore.has('session')
  if(isLoggedIn){
    redirect("/");
  }

  return (
    <div className={styles.page}>
      <LoginForm />
      <SignUpForm />
    </div>
  );
}
