import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import orange from "@material-ui/core/colors/orange";
import purple from "@material-ui/core/colors/purple";
import {createMuiTheme} from "@material-ui/core/styles/index";

export const theme = createMuiTheme({
    typography:{
        useNextVariants: true
    },
    palette: {
        primary: orange,
        secondary: orange,
    },
    overrides:{
        MuiAppBar:{
            root:{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            }
        },

    }
});
