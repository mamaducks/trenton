import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const mainColor = "#162c4f";


const theme = responsiveFontSizes(
  createTheme({
    spacing: 3,
    palette: {
        background: {
               default:  "#f0f0f1",
              },
      primary: {
        main: "#1e2f4d",
        contrastText: "#fff",
        secondary: "#800001",
        
      },
      text: {
          primary: "#183884",
        //   primary: "#1e2f4d",
          secondary: "#183884"
      }
      
    },
    components: {
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
    //       color: "#1c2f63",
          
    //     },
    //     styleOverrides: {
    //       root: {
    //         color: "#1c2f63",
    //       }
    //     }
    //   },
    //   MuiFormControl: {
    //     defaultProps: {
    //       margin: "dense",
    //     },
    //   },
   MuiDivider: {
styleOverrides: {
    root: {
        marginBottom: 4, 
        borderColor: "#800001" 
    }
}
   },
   MuiPaper: {
       styleOverrides: {
           root: {
            //    backgroundColor: "#f2f2f2"
           },
       },
   },

      MuiToggleButton: {
        styleOverrides: {
          root: {
              
            "&.Mui-selected": {
              backgroundColor: mainColor,
              color: "#fff",
            },
          },
        },
      },
    },
  })
);

export default theme;