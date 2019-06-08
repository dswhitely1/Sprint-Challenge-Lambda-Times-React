import React from 'react';
import TopBar from "./TopBar";
import Header from "./Header";
import Content from "./Content/Content";


const LambdaPage = props => {
    const {logOut} = props;
    return (
        <div className="App">
            <TopBar logOut={logOut}/>
            <Header/>
            <Content/>
        </div>
    );
};

export default LambdaPage;
