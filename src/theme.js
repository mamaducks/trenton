import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const mainColor = "#162c4f";


const theme = responsiveFontSizes(
  createTheme({
    spacing: 3,
    palette: {
      primary: {
        main: "#162c4f",
        contrastText: "#fff",
        secondary: "#800001"
      },
      
    },
    // components: {
    //   MuiStack: {
    //     defaultProps: {
    //       gap: 8,
    //       direction: "row",
    //       justifyContent: "space-between",
    //     },
    //   },
    //   MuiButton: {
    //     defaultProps: {
    //       variant: "outlined",
    //       color: "primary",
          
    //     },
    //     styleOverrides: {
    //       root: {
    //         textDecoration: "underline"
    //       }
    //     }
    //   },
    //   MuiFormControl: {
    //     defaultProps: {
    //       margin: "dense",
    //     },
    //   },
   

    //   MuiToggleButton: {
    //     styleOverrides: {
    //       root: {
    //         "&.Mui-selected": {
    //           backgroundColor: mainColor,
    //           color: "#fff",
    //         },
    //       },
    //     },
    //   },
    // },
  })
);

export default theme;