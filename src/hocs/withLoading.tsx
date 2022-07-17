import React from "react";

const withLoading = (Component: React.FC) => (props: any) => {
  if (props.isLoading) return <div>Loading data.</div>;

  return <Component {...props} />;
};
export default withLoading;
