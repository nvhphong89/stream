import React from "react";
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component {

    renderError=(meta)=>{
        if(meta.error && meta.touched){
            return(
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
                
            )
        }
    }
    
    renderInput=(formProps)=>{
        return(
            <div className="field">
                <label>{formProps.myLabel}</label>
                <input {...formProps.input} autoComplete="off"/>
                <div>{this.renderError(formProps.meta)}</div>
            </div>
        )
    }

    onFormSubmit = (formValues)=>{
        this.props.action(formValues);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className="ui form error"> 
                    <Field name="title" component={this.renderInput} myLabel="Enter title"/>
                    <Field name="description" component={this.renderInput} myLabel="Enter description"/>
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        );
    }
};

const validate =(formValues)=>{
    const error = {};

    if(!formValues.title){
        error.title = "Enter title";
    }
    if(!formValues.description){
        error.description="Enter description";
    }
    return error;
}

export default reduxForm({
    form: 'streamForm',
    validate:validate
})(StreamForm);;