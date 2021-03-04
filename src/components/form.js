import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import firebase from "../utility/firebase";
import Alert from "@material-ui/lab/Alert";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        LEGALmate
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Form() {
  const [note, setNote] = useState({
    email: "",
    username: "",
    experience: "",
    category: "",
    birthday: "",
    dlink: "",
    location: "",
    website: "",
    phone: "",
    bio: "",
    educationdetails: "",
    casesw: "",
    casest: "",
    languages: ""
  });
  function changeHandler(event) {
    //event.preventdefault()
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
    // event.preventdefault()
    console.log(event.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    const {
      email,
      username,
      experience,
      category,
      birthday,
      dlink,
      location,
      website,
      phone,
      bio,
      educationdetails,
      casesw,
      casest,
      languages
    } = note;
    const data = {
      email,
      username,
      experience,
      category,
      birthday,
      dlink,
      location,
      website,
      phone,
      bio,
      educationdetails,
      casesw,
      casest,
      languages
    };
    console.log(data);
    const todoRef = firebase.database().ref("Todo");
    todoRef.push(data);
    <Alert severity="success">This is a success alert — check it out!</Alert>;
    alert("Succesfully Application Submitted");
  }
  const classes = useStyles();

  return (
    <Container style={{textAlign:"left"}} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          APPLY NOW
        </Typography>

        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email address"
            name="email"
            value={note.email}
            onChange={changeHandler}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Full Name"
            name="username"
            value={note.username}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="experience"
            label="Years of professional experience"
            name="experience"
            value={note.experience}
            onChange={changeHandler}
          />
          <div>
            <span
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                fontWeight: "900"
              }}
            >
              Categories{" "}
            </span>
            <div style={{ backgroundColor: "pink", padding: "10px" }}>
              <span>1-> BANKING LAWYER</span>
              <br />
              <span>2-> CORPORATE LAWYER</span>
              <br />
              <span>3-> CIVIL RIGHTS LAWYER</span>
              <br />
              <span>4-> CRIMINAL LAWYER</span>
              <br />
              <span>5-> FAMILY LAW LAWYER</span>
              <br />
              <span>6-> ENVIRONMENTAL LAW LAWYER</span>
              <br />
            </div>
          </div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="category"
            label="Enter number"
            name="category"
            value={note.category}
            onChange={changeHandler}
          />
          {/* <input type="file" accept="image/*" onChange={readImages} /> */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter Fees"
            name="fees"
            value={note.fees}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Your Current Working Location"
            name="location"
            value={note.location}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Official Phone No."
            name="phone"
            value={note.phone}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            multiline="true"
            floatingLabelText="MultiLine"
            FloatingLabel="multiline"
            rows={5}
            label="Describe Yourself"
            name="bio"
            value={note.bio}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="website"
            label="Official Website"
            name="website"
            value={note.website}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Educational Background"
            name="educationdetails"
            value={note.educationdetails}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Total Cases Fought"
            name="casest"
            value={note.casest}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Cases Won"
            name="casesw"
            value={note.casesw}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Languages Known"
            name="languages"
            value={note.languages}
            onChange={changeHandler}
          />
          Date Of Birth <br />
          <input
            type="date"
            name="birthday"
            value={note.birthday}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dlink"
            label="DRIVE LINK "
            name="dlink"
            floatingLabelText="MultiLine"
            FloatingLabel="multiline"
            rows={3}
            value={note.dlink}
            onChange={changeHandler}
          />
          <div>
            <ul>
              <span
                style={{ fontWeight: "900", marginLeft: "-5%", marginTop: "0" }}
              >
                THE DRIVE LINK SHOULD CONTAIN ORIGINAL
              </span>
              <li>FORMAL PHOTOGRAPH</li>
              <li>EDUCATIONAL CERTIFICATES</li>
              <li>RESIDENCE PROOF</li>
            </ul>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitHandler}
          >
            Apply
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}