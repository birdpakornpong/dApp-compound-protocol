import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <AppBar position="fixed" elevation={0} color="transparent">
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <div className="layout-navbar">
            <div style={{ width: "300px" }}>
              <Typography variant="h6" color="inherit" sx={{ my: 1 }}>
                Company name
              </Typography>
            </div>
            <nav>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, px: 1.5 }}
              >
                Features
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, px: 1.5 }}
              >
                Enterprise
              </Link>
            </nav>
            <div style={{ width: "300px" }}>
              <Button href="#" variant="outlined">
                Login
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
