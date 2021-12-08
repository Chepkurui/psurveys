import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Webcam from "react-webcam";

import * as constants from '../../constants/constants';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const styles = {
  container: {
    // backgroundImage: `url(${backgroundImage})`,
    backgroundImage: `url(${constants.STATIC_FILES_IP}/assets/img/asus.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundColor: "#DC143C",
    width: "100vw",
    // height: '100vh'
    height: "100%",
  },
};

export default function BasicGrid() {
  
  const navigate = useNavigate();

  const loadHomePage = () => {
    /* navigate('/register', { replace: true }); */
    navigate("/home");
  };

  // Webcam
  // const webcamRef = React.useRef(null);
  const webcamRef = React.useRef("webcam");
  const videoConstraints = {
    width: 800,
    height: 800,
    facingMode: "user",
  };

  // User Entries
  //const [showWebcam, setShowWebcam] = React.useState(false);
  const [idNumber, setIdNumber] = React.useState(0);
  const [fullName, setFullName] = React.useState("");
  const [emailId, setEmailId] = React.useState("");

  const onChangeHandlerIdNumber = (event) => {
    setIdNumber(event.target.value);
    console.log(idNumber);
  };

  const onChangeHandlerFullName = (event) => {
    setFullName(event.target.value);
    console.log(fullName);
  };

  const onChangeHandlerEmailId = (event) => {
    setEmailId(event.target.value);
    console.log(emailId);
  };

  const submitUserEntries = () => {
    //setIdNumber(events);
    console.log(idNumber);
    //setShowWebcam(true);
  };

  // const [inputValues, setInputValues] = React.useState({
  //   idNumber: 0, fullName: '', emailId: ''
  // });

  // const handleOnChange = event => {
  //   const { name, value } = event.target;
  //   setInputValues({ ...inputValues, [name]: value });
  //   console.log(inputValues);
  // };

  // const capture = React.useCallback(() => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  // }, []);
  // const [count, setCount] = React.useState(0);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    // setCount(count+1);
  };

  const startRegistration = () => {
    /* navigate('/register', { replace: true }); */
    // navigate('/register');
    for (var c = 0; c < 30; c++) {
      captureImage();
      console.log(c);
    }
  };

  // videoUrls = async () => {
  // let i=0;
  // let urllist=[]
  // for(i;i< this.state.data.length;i++){
  //     const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.data[i].name}&key=xxxxxxxxxxx0`)
  //     const json = await response.json()
  //     urllist.push(json.items[0])
  //     console.log({urllist})
  //   }
  // }

  const startCapturingAndUploadingPictures = async () => {
    axios
      .post(`${constants.SERVER_IP}/apis/recognizeface`, {
        data: webcamRef.current.getScreenshot(),
      })
      .then((res) => {
        console.log(`response = ${res.data}`);
        //setName(res.data)
        if(res.data > 0){
          loadHomePage();
        }
      })
      .catch((error) => {
        console.log(`error = ${error}`);
      });

    //let i=0;
    //let urllist=[]
    //for(i; i<3; i++){
    //const imageSrc = webcamRef.current.getScreenshot();
    // console.log(imageSrc);
    //console.log(i);

    /*const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ title: 'React POST Request Example', data: imageSrc.data })
        // body: JSON.stringify(imageSrc)
      };

      const response = await fetch(`http://192.168.0.213:8000/apis/images/`, requestOptions)
      .then((response) => response.json());
      //const json = await response.json();
      console.log(response);*/

    //const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.data[i].name}&key=xxxxxxxxxxx0`, requestOptions);
    /*const response = await fetch(`http://192.168.0.213:5000/api`, requestOptions)
      .then((response) => response.json());
      const json = await response.json();
      //const pause = setTimeout(() => {  console.log("Pause!"); }, 2000);
      //timeout(1000);*/

    //const response =  await uploadIt(i, /*imageSrc*/webcamRef.current.getScreenshot());
    // console.log(response);

    //}
  };

  const timeout = (ms) => {
    //pass a time in milliseconds to this function
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const uploadIt = (count, req) => {
    //console.log(req);
    axios
      .post(`${constants.SERVER_IP}/apis/upload/3`, { data: req })
      .then((res) => {
        console.log(`response = ${res.data}`);
        //setName(res.data)
      })
      .catch((error) => {
        console.log(`error = ${error}`);
      });
    console.log(count);
  };

  return (
    <Box 
    // sx={{ flexGrow: 1 }}
    style={styles.container}
    >
      <Grid
        container
        spacing={2}
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={5}>
            <Stack spacing={2} direction="column">
              <Webcam
                audio={false}
                height={300}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={350}
                videoConstraints={videoConstraints}
              />
              <Button
                variant="contained"
                onClick={startCapturingAndUploadingPictures}
              >
                Start Face Recognition
              </Button>
            </Stack>
        </Grid>
        {/* <Grid item xs={6}>
          {/* <Item>33434</Item> */}
        {/*<Item>
            <Stack spacing={2} direction="row">
              {/* <Button variant="text">Text</Button> */}

        {/* <Button variant="contained">Register</Button>
              <Button variant="contained">Clock In</Button>
              <Button variant="contained">Clock In</Button> */}
        {/* <Button variant="outlined">Outlined</Button> */}
        {/*} </Stack>
          </Item>
          {/* <Item>xs=3</Item> }
        </Grid> */}
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
