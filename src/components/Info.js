import React, {Component} from 'react'

const infoStylesVars = {
    headerHigh: '50px',
}

const infoStyles = {
    root: {
        margin: '5px',
        border: '1px solid #cccccc'
    },

    header: {
        backgroundColor: '#3398CC',
        width: '100%',
        height: infoStylesVars.headerHigh,
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

class Info extends Component{
    render() {
        return(
            <div style={infoStyles.root}>
                <div style={infoStyles.header}>
                    <div style={infoStyles.headerText}>Информация о пациенте</div>
                </div>
                <div style={infoStyles.body}>
                    <div style={infoStyles.data}>
                        <div style={infoStyles.dataName}>ФИО</div>
                        <div style={infoStyles.dataValue}></div>
                    </div>
                    <div style={infoStyles.data}>
                        <div style={infoStyles.dataName}>Возраст</div>
                        <div style={infoStyles.dataValue}></div>
                    </div>
                    <div style={infoStyles.data}>
                        <div style={infoStyles.dataName}>Диагноз</div>
                        <div style={infoStyles.dataValue}></div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Info;