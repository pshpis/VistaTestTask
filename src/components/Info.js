import React, {Component} from 'react'

const infoStylesVars = {
    headerHigh: '50px',
}

const infoStyles = {
    root: {
        border: '1px solid #cccccc',
    },

    header: {
        backgroundColor: '#3398CC',
        width: '100%',
        height: infoStylesVars.headerHigh,
        borderBottom: '1px solid #cccccc',
        // border: '1px solid #cccccc',
        // borderBottom: 'none',
    },

    headerText: {
        verticalAlign: 'middle',
        color: 'white',
        paddingLeft: '20px',
        fontSize: '20px',
        fontWeight: '100',
        lineHeight: infoStylesVars.headerHigh,
    },

    body: {

    },

    data: {
        marginTop: '10px',
        paddingLeft: '5px',
        display: 'flex',
    },

    dataName: {
        width: '70px',
        // marginRight: '5px',
    },

    dataValue: {
        width: '140px',
        borderBottom: '1px solid #c1c1c1',
    }
}

function getAge(birthDateStr){
    console.log(birthDateStr);
    let birthDate = new Date(birthDateStr);
    return new Date(Date.now() - birthDate).getYear() - 70;
}

class Info extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div style={infoStyles.root}>
                <div style={infoStyles.header}>
                    <div style={infoStyles.headerText}>Информация о пациенте</div>
                </div>
                <div style={infoStyles.body}>
                    <div style={infoStyles.data}>
                        <div style={infoStyles.dataName}>ФИО</div>
                        <div style={infoStyles.dataValue}>
                            {this.props.currentUser.firstName !== undefined? this.props.currentUser.firstName + ' ' + this.props.currentUser.lastName: ''}
                        </div>
                    </div>
                    <div style={infoStyles.data}>
                        <div style={infoStyles.dataName}>Возраст</div>
                        <div style={infoStyles.dataValue}>{this.props.currentUser.firstName !== undefined? getAge(this.props.currentUser.birthDate): ''}</div>
                    </div>
                    <div style={infoStyles.data}>
                        <div style={infoStyles.dataName}>Диагноз</div>
                        <div style={infoStyles.dataValue}>{this.props.currentUser.firstName !== undefined? this.props.currentUser.diagnosis: ''}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;