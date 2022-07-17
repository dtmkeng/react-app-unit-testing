import { useState } from "react";

const Search: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  return (
    <>
      <input
        type="text"
        name="keyword"
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
