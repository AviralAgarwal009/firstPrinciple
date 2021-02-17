import React from 'react';
import './Home.css'

class Home extends React.Component{

    state={
        addClicked:""
    }

    addClicked=()=>{
        this.setState({addClicked:"addClicked"});
    }

    removeClicked=()=>{
        this.setState({addClicked:""});
    }

    render(){



        return (
            
            <div className={`Home__container ${this.state.addClicked}` }>
                <div className="btnContainer">
                
                <button className="btn add" onClick={this.addClicked}>Add</button>
                <button className="btn remove" onClick={this.removeClicked}>Remove</button>
                </div>
            </div>
        )
    }

}

export default Home;
