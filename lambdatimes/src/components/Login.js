import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "./styles/Container";

class Login extends Component {
    state = {
        username: '',
        password: '',
        isBlank: true,
        warning: false
    };

    handleChange = e => {
        if (e.target.name === 'username' && e.target.value !== '') {
            this.setState({isBlank: false});
        } else {
            this.setState({isBlank: true});
        }
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = e => {
        if (this.state.isBlank) {
            e.preventDefault();
            this.setState({warning: true});
            return;
        }
        localStorage.setItem('username', this.state.username);
        this.setState({email: '', password: '', isBlank: true, warning: false})
    }

    render() {
        return (
            <Container>
                <h1 className={'text-dark'}>Lambda Times</h1>
                <Form onSubmit={this.handleSubmit} className={'mx-auto'}>
                    <Form.Group controlId="formUserName">
                        <Form.Label className={'text-dark'}>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Username" name={'username'} value={this.state.username}onChange={this.handleChange}/>
                        {this.state.warning && <Form.Text className={'text-danger'}>
                            You must provide an username</Form.Text>}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className={'text-dark'}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name={'password'} value={this.state.password}
                                      onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type={'submit'}>
                        Login
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default Login;