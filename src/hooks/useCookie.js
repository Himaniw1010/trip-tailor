// hooks/useCookie.js

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const useCookie = () => {
  const [cookieValue, setCookieValue] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchCookie = async () => {
      const res = await fetch("/api");
      const data = await res.json();
      setCookieValue(data.isLoggedIn);
    };

    fetchCookie(); // Fetch cookie on initial render
  }, [pathname]); // Using router.asPath to detect URL changes

  return cookieValue;
};

export default useCookie;
