import { useEffect } from "react";
import { useRouter } from "next/router";

export default function HashScroll() {
  const router = useRouter();

  useEffect(() => {
    const scrollToHash = (url: string) => {
      const hash = url.split("#")[1];
      if (!hash) return;
      const id = decodeURIComponent(hash);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };

    const onComplete = (url: string) => {
      scrollToHash(url);
    };

    router.events.on("routeChangeComplete", onComplete);
    const timeoutId = window.setTimeout(() => scrollToHash(router.asPath), 0);

    return () => {
      window.clearTimeout(timeoutId);
      router.events.off("routeChangeComplete", onComplete);
    };
  }, [router]);

  return null;
}
