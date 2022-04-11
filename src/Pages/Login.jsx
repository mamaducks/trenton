import React, { useState } from "react";
import {
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  InputAdornment,
  TextField,
  Typography,
  Stack,
  Checkbox,
  Icon,
  FormControlLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LoginIcon from "@mui/icons-material/Login";

// import { useLocalStorage } from "../useLocalStorage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  //   textField: {
  //     marginLeft: theme.spacing(1),
  //     marginRight: theme.spacing(1),
  //     width: "25ch"
  //   },

  //   margin: {
  //     margin: theme.spacing(1)
  //   },
  //   withoutLabel: {
  //     marginTop: theme.spacing(3)
  //   },
  outerBox: {
    boxSizing: "border-box",
    padding: 12,
  },

  boxWidth: {
    display: "flex",
    flexGrow: 4,
  },

  gridBox: {
    root: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    paper: {
      //   padding: theme.spacing(2),
      textAlign: "center",
      //   color: theme.palette.text.secondary
    },
    messageInputBox: {
      boxSizing: "border-box",
      paddingRight: 24,
    },
  },
  buttonBox: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "center",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    width: "100%",
  },

  commentsBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  commentNameDate: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },

  bottomButton: {
    display: "flex",
    alignItems: "center",
    flexDirection: "center",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
  },

  foot: {
    padding: 35,
  },
}));

const defaultFormData = {
  name: "",
  email: "",
  comment: "",
};

function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return month + "/" + day + "/" + year;
}

export function LoginForm({ localComments, setLocalComments }) {
  const classes = useStyles();
  const [formData, setFormData] = useState(defaultFormData);
  const { name, email, comment } = formData;

  const onSubmit = () => {
    const newComments = [
      ...localComments,
      {
        name: formData.name,
        email: formData.email,
        message: formData.comment,
        date: getFormattedDate(new Date()),
      },
    ];

    setLocalComments(newComments);

    setFormData(defaultFormData);
  };

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
        py={3}
      >
        <Icon color="primary">
          <LoginIcon />
        </Icon>
        <Typography variant="h5" textAlign="center" color="text.primary">
          Login
        </Typography>
      </Stack>
      <Divider sx={{ mb: 7 }} />
      <Stack>
        <FormLabel>Sign In</FormLabel>
        <FormControl margin="dense">
          <TextField
            id="input-with-icon-textfield"
            placeholder="Email or Username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
            onChange={({ target: { value } }) =>
              setFormData((current) => ({ ...current, name: value }))
            }
            value={name}
          />
        </FormControl>

        <FormControl margin="dense">
          <TextField
            id="standard-start-adornment"
            placeholder="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityIcon />
                </InputAdornment>
              ),
            }}
            onChange={({ target: { value } }) =>
              setFormData((current) => ({ ...current, email: value }))
            }
            value={email}
          />
        </FormControl>

        <FormControlLabel
          key="remember"
          control={
            <Checkbox type="checkbox" name="remember" onChange="" checked="" />
          }
          label="Remember Me"
        />

        <Button
          disabled={!name && !comment}
          className={classes.bottomButton}
          onClick={onSubmit}
        >
          Sign In
        </Button>
        <Typography variant="subtitle1" textAlign="center" gutterBottom>
          Forgot your password?
        </Typography>
      </Stack>
    </Container>
  );
}
