"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./NoPermission.module.css";

function NoPermission() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      router.push("/dashboard");
    }, 5000);

    // Cleanup the timers if the component is unmounted
    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  useEffect(() => {
    if (countdown === 0) {
      router.push("/");
    }
  }, [countdown, router]);

  return (
    <div className={styles.wrapper}>
      <h3>You do not have enough permission to edit this itinerary</h3>
      <p>Redirecting to homepage in {countdown} seconds...</p>
    </div>
  );
}

export default NoPermission;