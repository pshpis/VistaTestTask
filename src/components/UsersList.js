import React, {Component} from 'react'
import axios from "axios";

const UsersListStylesVars = {
    headerHigh: '50px',
}

const UsersListStyles = {
    root: {
        userSelect: 'none',
        webkitUserSelect: 'none',
        msUserSelect: 'none',
        border: '1px solid #cccccc',
    },

    header: {
        backgroundColor: '#FAFAFA',
        width: '100%',
        height: UsersListStylesVars.headerHigh,
        borderBottom: '1px solid #cccccc',
        display: 'flex',
    },

    headerTab: {
        height: UsersListStylesVars.headerHigh,
        padding: '0 10px',
        lineHeight: UsersListStylesVars.headerHigh,
        fontSize: '20px',
        color: '#5a5a5a',
        width: '175px',
        textAlign: 'center',
    },

    headerTabActive: {
        color: '#4694B8',
        borderBottom: '2px solid #4694B8',
    },

    body: {
        width: '100%',
        maxHeight: 'calc(100vh - 30px - ' + UsersListStylesVars.headerHigh + ')',
        overflowY: 'auto',
    },

    usersTable: {
        width: '100%',
        padding: '0',
        borderCollapse: 'collapse'
    },

    usersTableRow:{
        borderBottom: '1px solid #cccccc',
    },

    usersTableRowActive: {
        backgroundColor: '#EEEEEE',
        borderLeft: '4px solid #4694B8',
        // marginLeft: '2px',
    },

    usersTableCell: {
        width: '33%',
        padding: '5px',
        // textAlign: 'center',
    }
}

class UsersList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0,
            currentUser: props.currentUser,
            usersTab0: [],
            usersTab1: [],
        }

        this.loadData();
    }

    renderTab(tabId){
        let text = '';
        if (tabId === 0) text = 'Присутствуют(' + this.state.usersTab0.length + ')';
        else if (tabId === 1) text = 'Выбывшие(' + this.state.usersTab1.length + ')';

        let style = UsersListStyles.headerTab;
        if (tabId === this.state.activeTab) style = Object.assign({}, style, UsersListStyles.headerTabActive);

        let changeActiveTab = () => {
            this.state.activeTab = tabId;
            this.setState(this.state);
        };

        return <div style={style} onClick={changeActiveTab}>{text}</div>
    }

    renderStudentsRows(){
        let data = this.state.activeTab === 0? this.state.usersTab0: this.state.usersTab1;
        let res = [];
        let id = 0;

        let changeCurrentUser = (user) => {
            this.state.currentUser = user;
            this.setState(this.state);
            this.props.updateCurrentUser(user);
        }

        data.forEach(user => {
            id ++;

            res.push(<tr key={"tr" + id} style={
                JSON.stringify(user) === JSON.stringify(this.state.currentUser)?
                    Object.assign({}, UsersListStyles.usersTableRow, UsersListStyles.usersTableRowActive):
                    UsersListStyles.usersTableRow
            } onClick={() => changeCurrentUser(user)}>
                <td style={UsersListStyles.usersTableCell}>{id}</td>
                <td style={UsersListStyles.usersTableCell}>{user.firstName + ' ' + user.lastName}</td>
                <td style={UsersListStyles.usersTableCell}>{this.state.activeTab === 0? user.bedNumber: user.cause}</td>
            </tr>);
        });


        return res;
    }

    loadData(){
        axios.get("presentList.json")
            .then(response => response.data)
            .then(data => {
                this.state.usersTab0 = data;
                this.setState(this.state);
            })
        axios.get("quittingList.json")
            .then(response => response.data)
            .then(data => {
                this.state.usersTab1 = data;
                this.setState(this.state);
            })
        this.state.wasDataLoad = true;
        this.setState(this.state);
    }

    render() {
        return(
            <div style={UsersListStyles.root}>
                <div style={UsersListStyles.header}>
                    {this.renderTab(0)}
                    {this.renderTab(1)}
                </div>
                <div style={UsersListStyles.body}>
                    <table style={UsersListStyles.usersTable}>
                        <tbody>
                        <tr style={Object.assign({color: '#878787'}, UsersListStyles.usersTableRow)} key={"tr0"}>
                            <td style={UsersListStyles.usersTableCell}>№ ИБ</td>
                            <td style={UsersListStyles.usersTableCell}>ФИО</td>
                            <td style={UsersListStyles.usersTableCell}>{this.state.activeTab === 0? 'Палата': 'Причина выбытия'}</td>
                        </tr>
                        {this.renderStudentsRows()}

                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}


export default UsersList;