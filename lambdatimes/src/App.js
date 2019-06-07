import React from 'react';
import LambdaPage from "./components/LambdaPage";
import Login from "./components/Login";
import withAuthenticate from "./authentication/withAuthenticate";

const HOCApp = withAuthenticate(LambdaPage)(Login);

const App = () => <HOCApp/>;

export default App;
