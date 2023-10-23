import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../../assets/BAFSKITC.png";

const drawerWidth = 240;
const navItems = [
   { name: "Home", path: "/" },
   { name: "Quiz", path: "/quiz" },
   { name: "About", path: "/about" },
   { name: "Contact", path: "/contact" },
];

function Header(props) {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
   };

   const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
         <img src={Logo} width="140px" className="md:hidden my-2 mx-auto"></img>
         <Divider />
         <List>
            <>
               {navItems.map((item) => (
                  <ListItem key={item} disablePadding>
                     <ListItemButton sx={{ textAlign: "center" }}>
                        {/* <ListItemText primary={item} /> */}
                        <Link className="font-medium text-center w-full" to={item.path}>
                           <ListItemText>{item.name}</ListItemText>
                        </Link>
                     </ListItemButton>
                  </ListItem>
               ))}
               <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
                     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemButton>
               </ListItem>
            </>
         </List>
      </Box>
   );

   const container = window !== undefined ? () => window().document.body : undefined;

   return (
      <Box sx={{ display: "flex" }}>
         <CssBaseline />
         <AppBar component="nav">
            <Toolbar>
               <div className="flex md:hidden w-full justify-between">
                  <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: "none" } }}>
                     <MenuIcon />
                  </IconButton>
                  <img src={Logo} width="140px" className="md:hidden my-2"></img>
               </div>
               <div className="hidden md:flex justify-between items-center w-full">
                  <div className="hidden md:flex place-items-center">
                     <img src={Logo} width="140px" className="hidden md:flex"></img>
                     <Typography variant="h6" component="div" sx={{ display: { md: "block" } }}>
                        BAFSKITC
                     </Typography>
                  </div>
                  <Box sx={{ display: { md: "block" } }}>
                     {navItems.map((item) => (
                        <Link className="m-0 md:m-2 lg:m-4 xl:m-6" to={item.path} key={item}>
                           <Button sx={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}>{item.name}</Button>
                        </Link>
                     ))}
                  </Box>
                  <Avatar sx={{ display: { md: "flex" } }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
               </div>
            </Toolbar>
         </AppBar>
         <nav>
            <Drawer
               container={container}
               variant="temporary"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: { xs: "block", md: "none" },
                  "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
               }}
            >
               {drawer}
            </Drawer>
         </nav>
         <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
         </Box>
      </Box>
   );
}

Header.propTypes = {
   window: PropTypes.func,
};

export default Header;