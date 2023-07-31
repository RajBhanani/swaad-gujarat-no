import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import NavButton from "./NavButton";
import NavButtonComponent from "./NavButtonComponent";
import NavButtonDrawer from "./NavButtonDrawer";

const NavBox = styled(AppBar)({
  background: "#9c0001",
  minHeight: "55px"
});

const NavContainerBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});

const Navbar = () => {
  return (
    <NavBox>
      <Toolbar style={{ minHeight: "55px", justifyContent: "space-between" }}>
        <NavContainerBox>
          <img src="logo.png" alt="logo" style={{ height: "40px" }} />
          <Typography color={"white"}>જય ગરવી ગુજરાત</Typography>
        </NavContainerBox>
        <NavContainerBox>
          <NavButton component={<NavButtonComponent text={"Menu"} />} />
          <NavButton component={<NavButtonComponent text={"Festivals"} />} />
          <NavButton component={<NavButtonComponent text={"History"} />} />
          <NavButton component={<NavButtonDrawer />} />
        </NavContainerBox>
      </Toolbar>
    </NavBox>
  );
};

export default Navbar;
