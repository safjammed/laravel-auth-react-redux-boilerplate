import React, {Component} from 'react';
import  {connect} from "react-redux";
import {fetchUser} from "../actions";
/*Start the application */
/*Index page of the application*/
class AppIndex extends Component{
    componentDidMount() {

    }

    render() {
        return (
            <div>
                The application has started! {console.log(csrf)}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { user : state.user };
}

export default connect(mapStateToProps,{fetchUser})(AppIndex);