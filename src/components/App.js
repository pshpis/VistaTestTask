import React, {Component} from 'react'
import Info from "./Info";

const appStyles = {
    parent: {
        padding: '10px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        height: '100vh',
        width: '100vw'
    },

    children: {
        backgroundColor: 'red',
        margin: '5px',
    }
}

class App extends Component{
    render() {
        return(
            <div style={appStyles.parent}>
                <Info />
                <div style={appStyles.children}></div>
            </div>
        );
    }
}

export default App;