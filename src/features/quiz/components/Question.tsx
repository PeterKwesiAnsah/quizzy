import React, { useRef } from "react";

export const Question = ({ question }: { question: string }) => {
  const containeRef = useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    if (containeRef.current) {
      containeRef.current.innerHTML = question;
    }
  }, []);
  return (
    <div
      ref={containeRef}
      className="max-w-sm rounded overflow-hidden shadow-lg"
    ></div>
  );
};
