import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = ()=>{
    return (
        <div className="ui container">
            <Router history={history}>
                <Header/>
                <div>
                    <Route path="/" exact component={StreamList}></Route>
                    <Route path="/streams/show" exact component={StreamShow}></Route>
                    <Route path="/streams/new" exact component={StreamCreate}></Route>
                    <Route path="/streams/delete" exact component={StreamDelete}></Route>
                    <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
                </div>
            </Router>
        </div>
    );
};

export default App;