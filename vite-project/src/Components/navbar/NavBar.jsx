import { Typography,Box,Button } from "@mui/material";




function NavBar () {
    return ( 
        <Box bgcolor={"#030712"} 
             height="70px"
             alignItems={"center"}
             sx={{
                display:"flex",
                justifyContent:"space-between"
             }}>
             <Typography  sx={{fontSize:"30px", color:"white",paddingLeft:"10px"}}>
                            {"<YS//>"}
            </Typography>
            <Box sx={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                gap:"10px"
            }}>
                <Typography variant="h5" color="white" >About</Typography>
                <Typography variant="h5" color="white">Work</Typography>
                <Typography variant="h5" color="white">Contacts</Typography>
                <Button  sx={{paddingLeft:"25px" ,fontSize:"20px"}}>download Cv</Button>
            </Box>
        </Box>
    );
}

export default NavBar ;