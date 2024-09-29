import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import SignUpBlock from "@/components/SignUpBlock/SignUpBlock";
import CopyWithHeading from "@/components/CopyWithHeading/CopyWithHeading";
import CardWithIcons from "@/components/CardWithIcons/CardWithIcons";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <CopyWithHeading
        heading="Welcome to TripTailor!"
        copy="Unleash the full potential of your travel experiences with TripTailor, the ultimate travel itinerary planner designed to make your trips effortless and unforgettable. Whether you’re planning a solo adventure, a family vacation, or a group getaway, TripTailor is here to help you every step of the way."
      />
      <CardWithIcons heading="Why TripTailor?" />
      <SignUpBlock />
      <Footer />
    </div>
  );
}
