import React, { Component } from 'react';
import {connect} from 'react-redux';
import { editUser } from '../store/usersAction'

class EditForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.user.name,
            email: props.user.email,
            gen: props.user.gen,
             
        };

        this.id = props.match.params.id
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        const updatedInfo = {
          name: this.state.name,
          email: this.state.email,
          gen: this.state.gen,
        
        };
        this.props.editUser(this.id, updatedInfo) 
        this.setState({
          name:'',
          email:'',
          gen:'',
        });

        this.props.history.push('/');
      };

    render() {
        return (
            <div className="">
            <p className = ""></p>
    
              <form onSubmit = {this.handleSubmit}>
            
               <span><input placeholder="Name" type ="text" name ="name" value={this.state.name} className ="name" onChange={this.handleChange} /></span><br />
               <span><input placeholder="Email" name ="email" type ="text" value={this.state.email} onChange={this.handleChange} /></span><br />
               <span><input type = " number" name ="gen" placeholder="Gen"value={this.state.gen} onChange ={this.handleChange}  /></span><br />
                <button type="submit">Update User</button>
    
             
          
               </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
user: state.users.find(user => user.id === ownProps.match.params.id)
});

const mapDispatchToProps = {
  editUser: editUser
}

export default  connect(mapStateToProps, mapDispatchToProps)(EditForm);
