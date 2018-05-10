import {squareItemsInArr} from '../sum'
import React from 'react'
export default class App extends React.Component {
    
    
    constructor(props){
        super(props)
        this.state ={
            numbers: [1, 2, 3]
        }
    }
    
    render(){
    
    const sqrdArr = squareItemsInArr(this.state.numbers)
    console.log(sqrdArr)
        return (
            <div>
           <h1>
               Hello!
            </h1>
            </div>
        )
    }
}
