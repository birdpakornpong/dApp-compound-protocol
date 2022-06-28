import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Navbar from "./Navbar";
import CardMain from "./CardMain";

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Navbar />
      <CardMain />
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
