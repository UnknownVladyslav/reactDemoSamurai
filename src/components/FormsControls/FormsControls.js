import React from "react";
import classes from './FormsControls.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {/*<textarea {...props} {...input} className={classes.inputTextarea} />*/}
                {props.children}
            </div>
            {hasError && <span className={classes.errorMessage}>{meta.error}</span>}
        </div>
    )
}

export const Textarea = props => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...props.input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...props.input} {...restProps} /></FormControl>
}