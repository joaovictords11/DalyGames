import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-screen-xl mx-auto px-3">{children}</div>;
};

export default Container;
