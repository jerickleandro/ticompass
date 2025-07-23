import { useEffect } from "react";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/UnderConstruction");
  }, [router]);

  return null;
}

export default Home;
