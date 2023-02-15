// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import "./index.css";

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import React from "react";
import ReactDOM from "react-dom";

import "graphiql/graphiql.css";

const endpoint = "";
const cmsToken = "";

const fetcher = createGraphiQLFetcher({
  url: endpoint,
  headers: {
    authorization: `${cmsToken} Subdomain 1`,
  },
});

ReactDOM.render(
  <GraphiQL fetcher={fetcher} />,
  document.getElementById("root")
);
