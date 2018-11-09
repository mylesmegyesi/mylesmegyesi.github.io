import React from "react";
import Helmet from "react-helmet";

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Helmet
      title="Myles Megyesi"
    >
      <html lang="en" />
    </Helmet>
    <div>
      {children}
    </div>
  </>
);
