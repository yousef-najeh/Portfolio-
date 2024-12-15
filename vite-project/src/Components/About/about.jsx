import { Box, Typography } from "@mui/material";
import AboutContent from "./content";
import AboutPhoto from "./photo";

function About() {
    return (
        <Box
            width="100%"
            bgcolor="#111827"
            id="about"
            display="flex"
            flexDirection="column"
            sx={{
                padding: { xs: "20px", md: "40px" },
                gap: { xs: "20px", md: "40px" }, 
            }}
        >
            <Typography
                variant="h4" 
                color="white"
                textAlign="center"
                p="10px 20px"
                bgcolor="#374151"
                borderRadius="20px"
                sx={{
                    fontSize: { xs: "20px", md: "24px" }, 
                    maxWidth: "200px",
                    margin: "0 auto",
                }}
            >
                About
            </Typography>

            <Box
                display="flex"
                justifyContent="space-evenly"
                flexDirection={{ xs: "column", md: "row" }} 
                alignItems="center" 
                sx={{
                    gap: { xs: "20px", md: "50px" },
                }}
            >
                <AboutPhoto />
                <AboutContent />
            </Box>
        </Box>
    );
}

export default About;
