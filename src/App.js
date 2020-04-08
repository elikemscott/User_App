import React, { Component } from "react";
import { connect } from 'react-redux';
import { addUser, deleteUser } from './store/usersAction';
import "./App.css";
import UserForm from './components/UsersForm';
import UserInfo from './components/UserInfo';

class App extends Component {
  

  AddNewUser = newUser => {
   this.props.addUser(newUser)
  };

  deleteUser = user_id => {
    this.props.deleteUser(user_id)
  }

  
  render() {
    return (
      <div >
        <UserForm addUser={this.AddNewUser} />
        
        <div className = "">
        <div className ="" >
           {this.props.users.map((field, index) => {
            return (
            <div >
            <UserInfo key={field.id } id={field.id} name = {field.name} email={field.email} gen={field.gen} removeUser = {this.deleteUser} />
            </div>
          
          );
        })}
        
        </div>
          
        </div>
       
        
       

      </div>
    )
  }
}


 const mapStateToProps = (state) => ({
   users: state.users

 })

 const mapDispatchToProps = {
   addUser: addUser,
   deleteUser: deleteUser

 }

export default  connect( mapStateToProps, mapDispatchToProps)(App);
