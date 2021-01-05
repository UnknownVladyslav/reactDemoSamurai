import React from 'react'
import classes from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
         status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div className={classes.inputWrapper}>
                        {this.props.status ?
                            <span onClick={this.activateEditMode}>{this.props.status}</span>
                            :
                            <span onClick={this.activateEditMode}>There is no status yet</span>
                        }
                    </div>
                    :
                    <div className={classes.inputWrapper}>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus