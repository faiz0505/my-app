"use client";

import Btn from "./components/Button";

export default function Error({ error, reset }) {
  return (
    <div className="h-20 w-full bg-slate-300">
      <h2>Something went wrong!</h2>
      {/* <p>{error && JSON.stringify(error)}</p> */}
      <Btn text={"Try again"} handleClick={() => reset()} />
    </div>
  );
}
