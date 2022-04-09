export const Tracker = ({
  current,
  total,
}: {
  current: number;
  total: number;
}) => {
  return (
    <div className="text-center mt-10">
      <span className="font-mulish font-bold  text-orange-500">
        {current + 1}
      </span>
      <span className="font-mulish  font-medium ">{"/" + total}</span>
    </div>
  );
};
