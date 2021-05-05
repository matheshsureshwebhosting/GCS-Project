import React from "react";
import {Validation} from "./validation";

class Add extends React.Component {
    user=async (event)=>{
        event.preventDefault()
        let data={
            name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value
        }
        console.log(data)
        const isValid = await Validation.isValid(data)
        if (isValid) {
            alert("yes")
        }
        else{
            alert("no")
        }
    }
    render() {
        return (
            <div>
                <form style={{textAlign:"center"}} onSubmit={this.user}>
                    <input type="text"/><br/>
                    <input type="text"/><br/>
                    <input type="text"/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
export default Add;