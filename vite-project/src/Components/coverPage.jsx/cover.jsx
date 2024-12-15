import { Box } from "@mui/material"; 
import Content from "./content"; 

function Cover() { 
    return (  
        <Box 
            width="100%" 
            bgcolor="#030712" 
            flexDirection={{ xs: "column", md: "row" }} 
            sx={{ 
                display: "flex", 
                justifyContent: "space-evenly", 
                alignItems: "center", 
            }}
        > 
            <Content /> 
            <Box 
                width="300px" 
                height="400px"
                p={"50px 50px"} 
                sx={{ 
                    marginTop: { xs: "20px", md: "50px" }, 
                }} 
                component="img" 
                src="/yousef.jpg" 
                alt="Cover Image" 
            /> 
        </Box> 
    ); 
} 
 
export default Cover; 
