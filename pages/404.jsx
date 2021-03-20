import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooooooops</h1>
      <h2>This page can' be found</h2>
      <p>
        Go back to{" "}
        <Link href="/">
          <a>homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
