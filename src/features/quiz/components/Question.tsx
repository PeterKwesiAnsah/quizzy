import React, { useRef } from "react";

export const Question = ({ question }: { question: string }) => {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  React.useEffect(() => {
    if (paragraphRef.current) {
      paragraphRef.current.innerHTML = question;
    }
  }, [question]);
  return <p ref={paragraphRef} className="text-gray-700 text-base"></p>;
};
