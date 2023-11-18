"use client"; // Error components must be Client components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="">
      <div className="container mx-auto">
        <div className="flex items-center flex-col mt-10">
          <h2 className="my-4 text-2xl font-bold">Something went wrong!</h2>
          <button
            className="mb-4 p-2 bg-red-500 text-white rounded-xl"
            onClick={() => reset()}
          >
            Try again
          </button>
          <p className="text-xl">
            Or go back to <Link href="/">Home</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
