import React, { Component } from "react";

class AddTenant extends Component{
    state={
        fullname: '',
        nepa: '',
        lawma: '',
        security: '',
        moved: ''
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit=e=> {
        e.preventDefault();
        this.props.addTenant(this.state.fullname, this.state.nepa, this.state.lawma, this.state.security, this.state.moved)
        this.setState({
            fullname: '',
            nepa: '',
            lawma: '',
            security: '',
            moved: ''
        })
    }
    render(){
        return(
            <form className="form-container" onSubmit={this.onSubmit}>
                <input type='text' name='fullname' value={this.state.fullname} onChange={this.onChange} placeholder='tenant name' className='input-text'/>
                <input type='text' name='nepa' value={this.state.nepa} onChange={this.onChange} placeholder='nepa..' className='input-text'/>
                <input type='text' name='lawma' value={this.state.lawma} onChange={this.onChange} placeholder='lawma..' className='input-text'/>
                <input type='text' name='security' value={this.state.security} onChange={this.onChange} placeholder='security..' className='input-text'/>
                {/* <input type='checkbox' name='moved' value={this.state.moved} onChange={this.onChange} placeholder='moved?..' className='input-text'/>
                 */}

                <input type="submit" value="Submit" className="input-submit" />
            </form>
        )
    }
}
export default AddTenant