/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

function Skill({text,photo}) {
    return (
        <Box display={"flex"} 
             flexDirection={"column"} 
             alignItems={"center"} 
             gap={"10px"} 
             padding={"20px"}>
            <Box component={"img"} src={photo} width={"100px"} height={"100px"} sx={{aspectRatio:"3/4",objectFit:"contain"}} />
            <Typography variant="body1" color="white">{text}</Typography>   
        </Box> 
    );
}

export default Skill;