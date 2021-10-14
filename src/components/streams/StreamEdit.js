import React from "react";
import { connect } from "react-redux";
import {fetchStream,editStream} from '../../actions'
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit =(formValues)=>{
        this.props.editStream(formValues, this.props.match.params.id);
    }

    render(){
        if(!this.props.stream){
            return(<div>Loading...</div>)
        }
        return (
            <div>
                <h3>Edit Stream</h3>
                {/* only pass down values that need to be updated to initialValues param */}
                <StreamForm initialValues={{title: this.props.stream.title, description: this.props.stream.description}} action={this.onSubmit}/>
            </div>
            
        );
    }
};

const mapStateToProps=(state, ownProps)=>{
    return({
        stream: state.streams[ownProps.match.params.id]
    })
}

export default connect(mapStateToProps, {fetchStream, editStream})( StreamEdit);