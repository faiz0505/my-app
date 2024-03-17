import { Spinner } from "@nextui-org/spinner";
import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default loading;
