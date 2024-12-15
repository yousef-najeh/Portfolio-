import { Typography, Box, Button, Link, IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function NavBar() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const handleDownload = () => {
        console.log("fwef")
        const link = document.createElement('a');
        link.href = './cv.pdf'; // Ensure the file is located in the public folder
        link.download = 'cv.pdf'; // The name the file will be saved as
        document.body.appendChild(link); // Append the link to the DOM
        link.click();
        document.body.removeChild(link); // Remove the link after clicking
    };
    

    return (
        <Box
    bgcolor="#030712"
    height="70px"
    position="sticky"
    top="0"
    left="0"
    sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10px",
        margin: 0,
        zIndex: 1000, // Ensures the header stays on top of other content
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Optional: Adds shadow for depth
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
                            onClick={handleDownload}
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
