import React from 'react';
import Grid from  '@material-ui/core/Grid'
import IdeaDetailMenu from './IdeaDetailsMenu';
import ContentLoader from 'react-content-loader'

const MyLoader = () => {
    return(
        <ContentLoader type="facebook" />
    )
}

class SingleIdeaBase extends React.Component{

    constructor(props){
        super(props);
    }


    render() {

        const {idea} = this.props;
        const DetailMenu = (  <IdeaDetailMenu />);

        return (
            <div>
                {idea? (<Grid container>

                    <Grid xs={8}  item>
                        {idea.ideaString}

                    </Grid>

                    <Grid xs={4}  item>

                        <IdeaDetailMenu idea={idea}/>


                    </Grid>
                </Grid>): <MyLoader/>}

            </div>
        );
    }
}


export default SingleIdeaBase;