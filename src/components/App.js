import React from 'react';
import {Header} from './Header';




export const App = ({children}) => {
    return(
        <div>
            <Header/>
            {children}
        </div>
    )

};


