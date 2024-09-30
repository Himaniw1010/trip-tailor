
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import Button from "@/components/Button/Button";

export default function Login() {
 
  return (
    <div className={styles.page}>
      <Header />
      <form>
        <div className="formGroup">
        <label for="email">Email</label>
        <input id="email" name="email" type="text" />
        </div>
        <div className="formGroup">
        <label for="password">Password</label>
        <input id="password" name="password" type="password" />
        <Button label="Submit" type="red" size="lg"/>
        </div>
      </form>
      <Footer />
    </div>
  );
}
