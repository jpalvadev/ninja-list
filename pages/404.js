import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function NotFound() {
  // We want to relocate the user back to the Homepage after 3 seconds. Using useRouter
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/'); // Takes the user to the Homepage
    }, 3000);
  }, []); // empty [] meaning: Run only once when this component(404.js) mounts(user provoques a 404)

  return (
    <div className="not-found">
      <h1>Oppppss.......</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the{' '}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
}
