'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold">Counter</h2>
      <p className="text-4xl font-semibold">{count}</p>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors"
        >
          Increase
        </button>
      </div>
    </div>
  );
} 