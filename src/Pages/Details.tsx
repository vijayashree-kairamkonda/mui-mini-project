import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import React from "react";
import detailsImage from "../assets/image2.jpg";
import postImage from "../assets/image2.jpg";
import Rightbar from "../components/rightbar";

const Details = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${detailsImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "250px",
        }}
      >
        <Typography
          align="center"
          color={"black"}
          variant="h2"
          sx={{ fontWeight: 900, padding: 10 }}
        >
          Clicked Poste Title
        </Typography>
      </Box>
      <Container>
        <hr />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
            <Typography
              m={4}
              align="center"
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              laudantium voluptates quaerat, excepturi soluta quos repudiandae
              consequuntur? Magnam labore blanditiis enim, laborum atque nulla
              veniam impedit necessitatibus totam, sed quibusdam?
            </Typography>
            <CardMedia
              component="img"
              height="300px"
              image={"https://previews.123rf.com/images/svl861/svl8611410/svl861141000174/32973640-set-of-various-woman-perfumes-isolated-o-white-background-.jpg"}
              alt="green iguana"
            />
            <Typography align="center" variant="h4" mt={2}>
              wait for it wait
            </Typography>
            <Typography
              m={4}
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              laudantium voluptates quaerat, excepturi soluta quos repudiandae
              consequuntur? Magnam labore blanditiis enim, laborum atque nulla
              veniam impedit necessitatibus totam, sed quibusdam? Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Aut laudantium
              voluptates quaerat, excepturi soluta quos repudiandae
              consequuntur? Magnam labore blanditiis enim, laborum atque nulla
              veniam impedit necessitatibus totam, sed quibusdam? Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Aut laudantium
              voluptates quaerat, excepturi soluta quos repudiandae
              consequuntur? Magnam labore blanditiis enim, laborum atque nulla
              veniam impedit necessitatibus totam, sed quibusdam?
            </Typography>
          </Box>
          <Box flex={1}>
            <Rightbar />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Details;
