import PaletteIcon from "@mui/icons-material/Palette";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, useNavigate } from "react-router";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PaletteIcon sx={{ display: "flex", mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PALGEN
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => navigate("/page-2")}
            >
              Page 2
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
