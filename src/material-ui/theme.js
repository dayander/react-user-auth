import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import orange from "@material-ui/core/colors/orange";
import deepOrange from "@material-ui/core/colors/deepOrange";
import {createMuiTheme} from "@material-ui/core/styles/index";

export const theme = createMuiTheme({
    typography:{
        useNextVariants: true
    },
    palette: {
        primary: orange,
        secondary: deepOrange,
    },
    overrides:{
        MuiAppBar:{
            root:{
                background: 'linear-gradient(45deg, #FF9801 30%, #FF3D00 90%)',
            }
        },

    }
});
