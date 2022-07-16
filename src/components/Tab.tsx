import React from "react";
import { useNavigate } from "react-router-dom";
const Tab: React.FC = () => {
  const navigate = useNavigate();
  const goTo = (url: string) => {
    navigate(url);
  };
  return (
    <div>
      <div onClick={() => goTo("/tab-a")}>Tab A</div>
      <div onClick={() => goTo("/tab-b")}>Tab B</div>
    </div>
  );
};
export default Tab;
