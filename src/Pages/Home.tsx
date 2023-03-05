import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Categories from "../components/categories";
import { Hero } from "../components/Hero";
import Rightbar from "../components/rightbar";


const Home = () => {
  return (
    <Box>
    <Hero/>
    <Container>
      <Categories/>
      <hr/>
      <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={1}>
            <Rightbar />
          </Box>
        </Stack>
    </Container>
    </Box>
  );
};

export default Home;
