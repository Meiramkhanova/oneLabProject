import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#285975" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18H8V14H12V10H16V6H20"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Levels.fyi
          </Typography>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
              marginRight: "700px",
              borderRadius: "13px",
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search By Company, Title, or City"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="login">
              <Button
                sx={{
                  backgroundColor: "#163A4E",
                  marginRight: "13px",
                  borderRadius: "5px",
                  color: "white",
                }}
                color="inherit"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button
                sx={{
                  backgroundColor: "#D9D9D9",
                  color: "#6D6D6D",
                  borderRadius: "5px",
                }}
                color="inherit"
              >
                Sign Up
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
