import axios from 'axios';




export const NetworkAction = (stuff) =>{


    const { } = stuff;




    const url = 'http://localhost:3090/';

    return dispatch=>{
        axios.put(url, project)
            .then(response=>{
                dispatch({
                    type: "type",
                    payload: response.data
                })


            })
            .catch(err=>{
                dispatch({
                    type: "type error",
                    payload: err
                })

            })

    }

};