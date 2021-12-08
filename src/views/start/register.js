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

import * as constants from '../../constants/constants'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  padding: theme.spacing(5),
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
    // backgroundColor: "#F00",
    width: "100vw",
    // height: '100vh'
    height: "100%",
  },
};

export default function BasicGrid() {
  const navigate = useNavigate();
  const loadLoginPage = () => {
    /* navigate('/register', { replace: true }); */
    navigate("/login");
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
  const [showNext, setShowNext] = React.useState(false);
  const [showWebcam, setShowWebcam] = React.useState(false);
  const [idNumber, setIdNumber] = React.useState(0);
  const [fullName, setFullName] = React.useState("");
  const [emailId, setEmailId] = React.useState("");

  const [uploadCount, setUploadCount] = React.useState(0);
  const [processingUpload, setprocessingUpload] = React.useState(false);

  const [responseIdNumber, setResponseIdNumber] = React.useState(0);

  const onChangeHandlerIdNumber = (event) => {
    setIdNumber(event.target.value);
    //console.log(idNumber);
  };

  const onChangeHandlerFullName = (event) => {
    setFullName(event.target.value);
    //console.log(fullName);
  };

  const onChangeHandlerEmailId = (event) => {
    setEmailId(event.target.value);
    //console.log(emailId);
  };

  const submitUserEntries = () => {
    //setIdNumber(events);
    //console.log(idNumber);
    setShowWebcam(true);
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

  const registerTheStaff = () => {
    //var faces = 0;
    //console.log(req);
    axios
      .post(`${constants.SERVER_IP}/apis/staff-create`, {
        card: idNumber,
        name: fullName,
        email: emailId,
      })
      .then((res) => {
        console.log(`response = ${res.data.card}`);
        //setName(res.data)
        //faces = res.data;
        setResponseIdNumber(res.data.card);
      })
      .catch((error) => {
        console.log(`error = ${error}`);
      });

    setShowWebcam(true);
    // console.log(count);
    //return faces;
  };

  const startCapturingAndUploadingPictures = async () => {
    setprocessingUpload(true);

    //var uCount = 30
    for (var uCount = 30; uCount > 0; uCount--) {
      uploadUntillFaceIdPicked(uCount);
      //uCount--;
      setUploadCount(uploadCount-1);
    }
    setShowNext(true);
  };

  const uploadUntillFaceIdPicked = async (count) => {
    //var faceDetected = 0;

    const response = await uploadThePicture(webcamRef.current.getScreenshot());

    console.log(`trigger = ${response}`);

    if (count == 1) {
      const mm = await triggerFaceTraining();
    }
  };

  const uploadThePicture = (req) => {
    var faces = 0;
    //console.log(req);
    axios
      .post(`${constants.SERVER_IP}/apis/upload/${idNumber}`, { data: req })
      .then((res) => {
        console.log(`faces = ${res.data}`);
        //setName(res.data)
        faces = res.data;

        // if(count == 0){
        //   triggerFaceTraining();
        // }
      })
      .catch((error) => {
        console.log(`error = ${error}`);
      });
    //console.log(count);
    return faces;
  };

  const triggerFaceTraining = () => {
    //var faces = 0;
    //console.log(req);
    axios
      .post(`${constants.SERVER_IP}/apis/trainfaces`)
      .then((res) => {
        console.log(`trained faces = ${res.data}`);
        //setName(res.data)
        //faces = res.data;
        //setResponseIdNumber(res.data.card);
      })
      .catch((error) => {
        console.log(`error = ${error}`);
      });

    setShowWebcam(true);
    // console.log(count);
    //return faces;
  };

  const uploadUntillFaceIdPickedOld = async () => {
    var faceDetected = 0;

    // console.log(`captuting = ${faceDetected}`)
    // const reponse = axios.post('http://192.168.0.213:8000/apis/upload/559', {data : webcamRef.current.getScreenshot()})
    //   .then(res => {
    //     console.log(`response = ${res.data}`)
    //     //setName(res.data)
    //     faceDetected = res.data;
    //     console.log(`faces : ${faceDetected}`)
    //   })
    //   .catch(error => {
    //     console.log(`error = ${error}`)
    //   });

    // if(faceDetected == 0) {
    //  uploadUntillFaceIdPicked();
    // }
    // else {
    //     // stop calling recurse()
    // }

    const response = await uploadThePicture(
      faceDetected,
      webcamRef.current.getScreenshot()
    );
  };

  //uploadUntillFaceIdPicked();

  const startCapturingAndUploadingPicturesOld = async () => {
    setprocessingUpload(true);
    let i = 0;
    //let urllist=[]
    for (i; i < 3; i++) {
      const imageSrc = webcamRef.current.getScreenshot();
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

      const response = await uploadIt(
        i,
        /*imageSrc*/ webcamRef.current.getScreenshot()
      );
      // console.log(response);
    }
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
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <h1 style={{ color: "white", fontWeight: "bold", fontSize: "48px" }}>
            Personal Details
          </h1>
        </Grid>
        <Grid item xs={5}>
          <Stack spacing={2} direction="column">
            {showWebcam ? (
              <>
                <Webcam
                  audio={false}
                  height={400}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  width={500}
                  videoConstraints={videoConstraints}
                />

                {processingUpload ? (
                  <Button variant="text">{uploadCount} Uploads</Button>
                ) : (
                  <></>
                )}

                <Button
                  variant="contained"
                  onClick={startCapturingAndUploadingPictures}
                >
                  Click to Start Face Capture
                </Button>
              </>
            ) : (
              <>
                <Item>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "50ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <Stack spacing={2} direction="column">
                      <TextField
                        id="outlined-basic"
                        label="ID Number"
                        variant="outlined"
                        value={idNumber}
                        onChange={onChangeHandlerIdNumber}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        value={fullName}
                        onChange={onChangeHandlerFullName}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={emailId}
                        onChange={onChangeHandlerEmailId}
                      />
                      {/* <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                /> */}
                      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                /> */}
                    </Stack>
                  </Box>
                  {showNext ? (
                    <Button variant="contained" onClick={loadLoginPage}>
                      Proceed to Login
                    </Button>
                  ) : (
                    <Button variant="contained" onClick={registerTheStaff}>
                      Register
                    </Button>
                  )}
                </Item>
              </>
            )}
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
