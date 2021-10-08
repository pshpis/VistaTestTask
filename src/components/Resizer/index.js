import React, {Component} from 'react'

class Resizer extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={
                {
                    cursor: "col-resize",
                    display: "grid",
                    placeItems: "center",
                }
            }>
                <img src="img/3-vertical-dots-grey.svg" alt="drag" style={{height: '25px'}}/>
            </div>
        );
    }
}


export default Resizer;