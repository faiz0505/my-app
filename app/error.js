"use client";

export default function Error({ error, reset }) {
  return (
    <div className="h-20 w-full bg-slate-300">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
