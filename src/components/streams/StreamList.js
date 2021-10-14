import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderModifyingButtons = (stream)=>{
        if(stream.userId === this.props.currentUserId){
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <button className="ui button negative">Delete</button>
                </div>
            )
        }
    }
    renderCreateButton = ()=>{
        if(this.props.isSignedIn){
            return(
                <div style={{textAlign: "right"}}>
                    <Link to="/streams/new" className="ui button green">Create Stream</Link>
                </div>
            )
        }
        
    }
    renderedStreams = ()=>{
        return this.props.streams.map(stream=>{
                return(
                <div className="item" key={stream.id}>
                    {this.renderModifyingButtons(stream)}
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                    
                </div>);
            });
    }
    render(){
        return (
            <div>
                <h2>streams</h2>
                <div className="ui celled list"> {this.renderedStreams()}</div>
                {this.renderCreateButton()}
            </div>
            
        );
    }
};
const mapStateToProps =(state)=>{
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, {fetchStreams})( StreamList);