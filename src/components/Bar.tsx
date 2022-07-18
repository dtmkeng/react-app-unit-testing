import { useEffect, useState } from "react";
import Search from "./Search";
type Props = {
  setValue(value: string): void;
};
const Bar: React.FC<Props> = (props) => {
  const [value, setValue] = useState<string>("");
  const [a, setA] = useState<string>("");
  useEffect(() => {
    props.setValue(value);
  }, [props, value]);
  return <Search setValue={setValue} />;
};
export default Bar;
