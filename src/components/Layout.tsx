import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Helmet
      title="Myles Megyesi"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <div
      style={{
        background: "rebeccapurple",
        marginBottom: "1.45rem",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "1.45rem 1.0875rem",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Site Title
          </Link>
        </h1>
      </div>
    </div>
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </>
);
