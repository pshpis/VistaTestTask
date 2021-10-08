import React, {Component} from 'react'

const resizerStyles = {
    root: {
        userSelect: 'none',
        webkitUserSelect: 'none',
        msUserSelect: 'none',
        cursor: "col-resize",
        display: "grid",
        placeItems: "center",
    },

    resizerImg: {
        height: '25px'
    }
}

class Resizer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    }

    render() {
        return(
            <div style={resizerStyles.root} onMouseDown={() => {
                console.log(-1);
                this.state.active = true;
                this.setState(this.state);

                document.body.style = "cursor: col-resize;";

                document.onmousemove = event => {
                    console.log(0);
                    if (this.state.active === false) return;
                    let cur_x = 0;
                    cur_x = event.pageX;
                    // console.log(cur_x);

                    if (cur_x - 10 > 300 && cur_x - 10 < window.innerWidth - 500) this.props.updateInfoWindowWidth(cur_x - 10)
                    // else return false;
                }

                document.onmouseup = event => {
                    document.body.style = "cursor: auto;";
                    console.log(-2);
                    this.state.active = false;
                    this.setState(this.state);
                }
            }}>
                <img src="img/3-vertical-dots-grey.svg" alt="drag" style={resizerStyles.resizerImg}/>
            </div>
        );
    }
}


export default Resizer;