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
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" rel="stylesheet" />

      {/*For some reason Glamor doesn't work within react-helment when JavaScript is disabled*/}
      <style type="text/css">{`
        body {
          font-family: 'Open Sans', sans-serif;
        }
    `}</style>
    </Helmet>
    <div>
      {children}
    </div>
  </>
);
