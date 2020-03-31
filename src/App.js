import React, { Component } from "react";
import { connect } from 'react-redux';
import { addUser } from './store/usersAction';
import "./App.css";
import UserForm from './components/UsersForm';
import UserInfo from './components/UserInfo';

class App extends Component {
  

  AddNewUser = newUser => {
   this.props.addUser(newUser)
  };

  
  render() {
    return (
      <div >
        <UserForm addUser={this.AddNewUser} />
        
        <div className = "">
        <div className ="" >
           {this.props.users.map((field, index) => {
            return (
            <div >
            <UserInfo key={index } name = {field.name} email={field.email} gen={field.gen} />
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
   addUser: addUser

 }

export default  connect( mapStateToProps, mapDispatchToProps)(App);
