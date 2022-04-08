import React from "react";

export const Category = ({ category }: { category: string }) => {
  return (
    <div className="mb-2">
      <h2 className="text-slate-600 font-bold text-xl">{category}</h2>
    </div>
  );
};
