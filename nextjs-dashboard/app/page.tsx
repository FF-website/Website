'use client'; 

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect immediately on page load
    router.push('/beta/login');
  }, [router]);

  return <div>Redirecting...</div>;
};

export default Page;
