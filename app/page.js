"use client";

import Link from "next/link";

export default function Home() {
  const weekDemos = [2,3,4,5,6,7,8,10];
  const doneUpTo = 10;

  return (
    <main className="bg-blue-200 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
        <div className="text-lg">
          <ul>
            {weekDemos.map((week) => (
              <li key={week} className="hover:text-green-500 hover:underline">
                <Link href={`/week-${week}`}>Week {week} Assignment</Link>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </main>
  );
}