import React, {Component} from 'react';

const withAuthenticate = LambdaPage => Login =>
    class extends Component {
        state = {
            isAuth: false
        };

        componentDidMount() {
            if (localStorage.getItem('username')) {
                this.setState({isAuth: true})
            } else {
                this.setState({isAuth: false});
            }
        }

        handleLogout = () => {
            localStorage.removeItem('username');
            this.setState({isAuth: false})
        };

        render() {
            return this.state.isAuth ? <LambdaPage logOut={this.handleLogout}/> : <Login/>
        }

    };

export default withAuthenticate;