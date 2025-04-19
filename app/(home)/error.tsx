'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="text-center p-4">
      <h2 className="text-xl text-red-700">Something went wrong!</h2>
      <button onClick={() => reset()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Try Again
      </button>
    </div>
  );
}
