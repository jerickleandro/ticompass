import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/UnderConstruction');
  }, []);

  return null;
}

export default Home;
