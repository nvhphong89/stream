import React, { Fragment } from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Modal";
import {fetchStream, deleteStream} from '../../actions';
import { Link } from "react-router-dom";

class StreamDelete extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions=()=>{
        return (
                <Fragment>
                    <button onClick={()=>this.props.deleteStream(this.props.match.params.id)} className="ui red button">Delete</button>
                    <Link to={"/"} className="ui button">Cancel</Link>
                </Fragment>
            );
    }

    renderContent=()=>{
        if(!this.props.stream){
            return "Are you sure to delete this stream?"
        }
        return `Are you sure to delete this stream: ${this.props.stream.title}?`
    }

    render(){
        return (
            <div>
                <Modal
                title="Delete stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={()=>history.push("/")}
                />
            </div>
        );
    }
};

const matchStateToProps=(state, ownProps)=>{
    return({
            stream: state.streams[ownProps.match.params.id]
        });
}
export default connect(matchStateToProps, {fetchStream, deleteStream})( StreamDelete);