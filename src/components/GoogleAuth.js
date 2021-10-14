import React from 'react';
import { connect } from 'react-redux';
import {signIn, signOut} from './../actions'

class GoogleAuth extends React.Component {

    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:'899041313517-a6atmc1suagcnjkd9f6ql8hfli2gr60v.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else if (!isSignedIn){
            this.props.signOut();
        } else{
            return;
        }
    }

    onSignIn = ()=>{
        this.auth.signIn();
    }

    onSignOut = ()=>{
        this.auth.signOut();
    }
    renderedAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        } else if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="icon google"/>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignIn} className="ui green google button">
                    <i className="icon google"/>
                    Sign In With Google
                </button>
            )
        }
    }

    render (){
        return (
            <div>{this.renderedAuthButton()}</div>
        );
    }
}

const mapStateToProps = (state)=> {
    return{
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps,{signIn, signOut})( GoogleAuth);