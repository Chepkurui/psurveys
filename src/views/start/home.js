import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const styles = {
  container: {
    // backgroundImage: `url(${backgroundImage})`,
    // backgroundImage: `url(http://localhost:3000/assets/img/asus.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundColor: "#F00",
    width: "100vw",
    // height: '100vh'
    height: "100%",
  },
};

export default function BasicGrid() {
  const navigate = useNavigate();
  const loadRegistrationPage = () => {
    /* navigate('/register', { replace: true }); */
    navigate("/register");
  };
  const loadLoginPage = () => {
    /* navigate('/register', { replace: true }); */
    navigate("/login");
  };
  return (
    <Box
      /*/ sx={{
    //   flexGrow: 1,
    //   backgroundImage: 'url("http://localhost:3000/assets/img/red.jpg")',
    //   }}*/

      style={styles.container}
    >
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <h1 style={{ color: "black", fontWeight: "bold", fontSize: "48px" }}>
            Welcome!
          </h1>
        </Grid>
        <Grid item xs={12} spacing={0}>
          {/* <Item>33434</Item> */}
          {/* <Item> */}
          <Stack spacing={2} direction="column">
            <Stack spacing={2} direction="row">
              {/* <Button variant="text">Text</Button> */}
              {/* <Button variant="contained" onClick={loadRegistrationPage}>
                Register
              </Button>
              <Button variant="contained" onClick={loadLoginPage}>
                Clock In
              </Button> */}
              {/* <Button variant="outlined">Outlined</Button> */}
            </Stack>
          </Stack>
          {/* </Item> */}
          {/* <Item>xs=3</Item> */}
        </Grid>
        {/* <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid> */}
        {/* <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}
