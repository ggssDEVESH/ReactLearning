import React from "react";

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
            <h2>Location: Ap</h2>
            <h2>Contact: 9999779797</h2>
        </div>
    );
}
}

export default UserClass