import { useEffect, useState } from "react";
type Props = {
  setValue(value: string): void;
};
const Search: React.FC<Props> = ({ setValue }) => {
  const [keyword, setKeyword] = useState<string>("");
  useEffect(() => {
    setValue(keyword);
  }, [keyword, setValue]);
  return (
    <>
      <input
        type="text"
        name="keyword"
        value={keyword}
        data-testid="keyword"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button data-testid="button" disabled={keyword === ""}>
        Search
      </button>
    </>
  );
};
export default Search;
