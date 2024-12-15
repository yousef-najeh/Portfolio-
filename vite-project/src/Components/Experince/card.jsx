import { Box, Typography, List, ListItem } from "@mui/material";

function Card() {
    return (
        <Box
            width={"100%"}
            bgcolor={"#1F2937"}
            display={"flex"}
            justifyContent={"space-between"}
            borderRadius={"10px"}
            flexDirection={{xs:"column",md:"row"}}
        >
            <Box display={"flex"} 
                 gap={"30px"}
                 flexDirection={{xs:"column",md:"row"}}>

                <Box component={"img"} src="./Asal.png" />

                <Box p={"10px"} display={"flex"} flexDirection={"column"}>
                    <Typography variant="h5" color={"white"} sx={{ mb: 2 }}>
                        Front End Intern
                    </Typography>
                    <List
                        sx={{ color: "white", padding: 0, listStyleType: "disc", pl: 2 }}
                    >
                        <ListItem sx={{ padding: 0, display: "list-item", mb: 1 }}>
                            <Typography variant="h6" color="white">
                                Write clean, efficient, and maintainable code.
                            </Typography>
                        </ListItem>

                        <ListItem sx={{ padding: 0, display: "list-item", mb: 1 }}>
                            <Typography variant="h6" color="white">
                                Develop and manage complex React-based projects.
                            </Typography>
                        </ListItem>

                        <ListItem sx={{ padding: 0, display: "list-item" }}>
                            <Typography variant="h6" color="white">
                                Create visually appealing designs using Sass for styling.
                            </Typography>
                        </ListItem>
                    </List>
                </Box>
            </Box>

            <Typography p={"10px"} variant="body1" color={"white"} >
                November 2023 - jan 2024
            </Typography>
        </Box>
    );
}

export default Card;
