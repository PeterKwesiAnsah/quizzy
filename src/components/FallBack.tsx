import React from "react";
import { ErrorBoundaryProps, FallbackProps } from "react-error-boundary";
import { Link } from "react-router-dom";

export const FallBack = (props: FallbackProps) => {
  return (
    <div
      role="alert"
      className="grid  place-items-center mt-[5%]  auto-rows-min gap-4"
    >
      <h1 className="text-2xl md:text-9xl font-bold text-red-500">Ooops....</h1>

      <button
        onClick={props.resetErrorBoundary}
        type="reset"
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        Try Again
      </button>
    </div>
  );
};
