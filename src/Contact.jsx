import React, { useState } from "react";
import clsx from "clsx";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  FormControl,
  FormLabel,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  InputAdornment,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

// import { useLocalStorage } from "../useLocalStorage";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
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
    padding: 12
  },

  boxWidth: {
    display: "flex",
    flexGrow: 4
  },

  gridBox: {
    root: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    paper: {
    //   padding: theme.spacing(2),
      textAlign: "center",
    //   color: theme.palette.text.secondary
    },
    messageInputBox: {
      boxSizing: "border-box",
      paddingRight: 24
    }
  },
  buttonBox: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "center",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    width: "100%"
  },

  commentsBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },

  commentNameDate: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },

  bottomButton: {
    display: "flex",
    alignItems: "center",
    flexDirection: "center",
    justifyContent: "center",
    alignContent: "center",
    width: "100%"
  },

  foot: {
    padding: 35
  }
}));

const defaultFormData = {
  name: "",
  email: "",
  comment: ""
};

function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return month + "/" + day + "/" + year;
}

export function ContactForm({ localComments, setLocalComments }) {
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
        date: getFormattedDate(new Date())
      }
    ];

    setLocalComments(newComments);

    setFormData(defaultFormData);
  };

  return (
    <div>
      <div>
        <div className={classes.boxWidth}>
          <TextField
            className={classes.margin}
            style={{ width: "50%" }}
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                  Name
                </InputAdornment>
              )
            }}
            onChange={({ target: { value } }) =>
              setFormData(current => ({ ...current, name: value }))
            }
            value={name}
          />
          <TextField
            style={{ width: "50%" }}
            id="standard-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                  Email Address
                </InputAdornment>
              )
            }}
            onChange={({ target: { value } }) =>
              setFormData(current => ({ ...current, email: value }))
            }
            value={email}
          />
        </div>
        <div className={classes.buttonBox}>
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            style={{ margin: 8 }}
            placeholder="Placeholder"
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
            onChange={({ target: { value } }) =>
              setFormData(current => ({ ...current, comment: value }))
            }
            value={comment}
          />
        </div>
      </div>

      <Button
        disabled={!name && !comment}
        className={classes.bottomButton}
        onClick={onSubmit}
      >
        leave comment
      </Button>
    </div>
  );
}

