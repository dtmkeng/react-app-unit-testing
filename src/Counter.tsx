import { useState } from "react";

type Props = {
  inital: number;
};

const Counter: React.FC<Props> = ({ inital }) => {
  const [value, setValue] = useState<number>(inital);
  return (
    <>
      <div onClick={() => setValue(value + 1)}>+</div>
      <div>{value}</div>
      <div onClick={() => setValue(value - 1)}>-</div>
    </>
  );
};
export default Counter;
