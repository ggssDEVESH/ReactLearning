import React from "react";
import UserContext from "../utils/userContext";

class UserClass extends React.Component {
    constructor(props){
        super(props)
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ggssDEVESH");
        const json = await data.json();
    }
    
    render(){
    const {name} = this.props

       return( 
       <div className="user-card">
            <h2>Name: {name}</h2>
            <div>
                Logged In User:
                <UserContext.Consumer>
                    { ({loggedInUser}) => <h2 className="text-lg font-bold">{loggedInUser}</h2>}
                </UserContext.Consumer>
            </div>
            <h2>Location: Ap</h2>
            <h2>Contact: 9999779797</h2>
        </div>
    );
}
}

export default UserClass