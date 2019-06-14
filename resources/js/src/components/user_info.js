import React, {Component} from 'react';
import  {connect} from "react-redux";
import {fetchUser} from "../actions";
import _ from 'lodash';

class UserInfo extends Component{
    componentDidMount() {
        this.props.fetchUser();
    }
    renderUserInfo(){
        return _.map(this.props.user, (itm,key) => {
            return (
                <li className="list-group-item" key={"usr_"+key}>
                    <b>{key} : </b> {itm}
                </li>
            );
        });
    }
    render() {
        console.log("user_info.js ",this.props.user);
        return (
            <div className={"container"}>
                <h2>
                    { _.isEmpty (this.props.user) ? "user Not logged in" : "User is logged in User information is given below: "}
                </h2>
                <ul className="list-group">
                    {this.renderUserInfo()}
                </ul>

            </div>
        );
    }

}


function mapStateToProps(state) {
    return { user : state.user };
}

export default connect(mapStateToProps,{fetchUser})(UserInfo);