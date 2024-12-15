import { Typography, Box, Button, Link, IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function NavBar() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <Box
            bgcolor={"#030712"}
            height="70px"
            position={"sticky"}
            left={"0"}
            top={"0"}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 10px",
                margin: "0", 
            }}
        >
            <Typography
                sx={{
                    fontSize: { xs: "20px", md: "30px" },
                    color: "white",
                }}
            >
                {"<YS//>"}
            </Typography>

            <Box
                sx={{
                    display: { xs: "none", md: "flex" }, 
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                }}
            >
                <Link variant="h5" href={"#about"} sx={{ textDecoration: "none", color: "white" }}>
                    about
                </Link>
                <Link variant="h5" href={"#Skills"} sx={{ textDecoration: "none", color: "white" }}>
                    Skills
                </Link>
                <Link variant="h5" href={"#uu"} sx={{ textDecoration: "none", color: "white" }}>
                    Experience
                </Link>
                <Button
                    sx={{
                        fontSize: "20px",
                        color: "white",
                    }}
                >
                    download Cv
                </Button>
            </Box>

            <IconButton
                sx={{
                    display: { xs: "block", md: "none" }, 
                    color: "white",
                }}
                onClick={toggleDrawer}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={toggleDrawer}
                PaperProps={{
                    sx: { bgcolor: "#030712", color: "white", width: "250px" },
                }}
            >
                <List>
                    <ListItem button>
                        <Link href={"#about"} sx={{ textDecoration: "none", color: "white",padding: "0", margin: "0",  }}>
                            about
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link href={"#Skills"} sx={{ textDecoration: "none", color: "white" }}>
                            Skills
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link href={"#uu"} sx={{ textDecoration: "none", color: "white" }}>
                            Experience
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Button
                            sx={{
                                color: "white",
                            }}
                        >
                            download Cv
                        </Button>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}

export default NavBar;
