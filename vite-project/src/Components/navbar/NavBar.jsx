import { Typography, Box, Button,Link } from "@mui/material";




function NavBar() {
    return (
        <Box bgcolor={"#030712"}
            height="70px"
            alignItems={"center"}
            position={"sticky"}
            left={"0"}
            top={"0"}
            sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
            <Typography sx={{ fontSize: "30px", color: "white", paddingLeft: "10px" }}>
                {"<YS//>"}
            </Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px"
            }}>
                <Link variant="h5" href={"#about"} sx={{textDecoration:"none",color:"white"}}>about</Link>
                <Link variant="h5" href={"#Skills"} sx={{textDecoration:"none",color:"white"}}>Skills</Link>
                <Link variant="h5" href={"#uu"} sx={{textDecoration:"none",color:"white"}}>Experience</Link>
                <Button sx={{ paddingLeft: "25px", fontSize: "20px" }}>download Cv</Button>
            </Box>
        </Box>
    );
}

export default NavBar;