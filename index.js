import React from 'react';
import {render} from 'react-dom';
import sum from './sum'



class App extends React.Component {
    render(){
        return (
            <div>
           <h1>
               Hello!
            </h1>
            </div>
        )
    }
}



render(<App />, document.getElementById("app"))