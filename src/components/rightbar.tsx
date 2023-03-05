import {
    Avatar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
  } from "@mui/material";
  import React from "react";
  import Card from "../components/card";
  import {postImage2} from "../assets/image3.jpg";
  import {postImage3} from "../assets/image4.jpg";
  import {postImage4} from "../assets/image5.jpg";


  
  const Rightbar = () => {
    return (
      <Box>
        <Typography align="center" bgcolor={"black"} color="white">
          Most Popular
        </Typography>
        <List
          sx={{
            width: "100%",
            height: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar
                sx={{ height: 80, width: 80 }}
                variant="square"
                alt="Remy Sharp"
                src={postImage2}
              />
            </ListItemAvatar>
            <ListItemText
              secondary={" — I'll be in your neighborhood doing errands this…"}
            />
          </ListItem>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar
                sx={{ height: 80, width: 80 }}
                variant="square"
                alt="Remy Sharp"
                src={postImage3}
              />
            </ListItemAvatar>
            <ListItemText
              secondary={" — I'll be in your neighborhood doing errands this…"}
            />
          </ListItem>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar
                sx={{ height: 80, width: 80 }}
                variant="square"
                alt="Remy Sharp"
                src={postImage4}
              />
            </ListItemAvatar>
            <ListItemText
              secondary={" — I'll be in your neighborhood doing errands this…"}
            />
          </ListItem>
          <Divider variant="inset" component={"li"} />
        </List>
        <Typography align="center" bgcolor={"black"} color="white">
          About Us
        </Typography>
        <Card cardImage={postImage4}/>
      </Box>
    );
  };
  
  export default Rightbar;
  