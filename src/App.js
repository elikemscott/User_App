import React, { Component } from "react";
import "./App.css";
import UserForm from './components/UsersForm';
import UserInfo from './components/UserInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Ahmed Zaky",
          email: "ahmed@email.com",
          gen: 1
        },
        {
          name: "Kwesi Arthur",
          email: "kwesi@email.com",
          gen: 6
        },
        {
          name: "Kuame Uegine",
          email: "kuame@email.com",
          gen: 3
        },
        {
          name: "King Promise",
          email: "king@email.com",
          gen: 3
        }
      ],
      
    };
  }

  AddNewUser = (newUser) => {
    this.setState({
      users: [...this.state.users, newUser]
    });
  };

  
  render() {
    return (
      <div >
        <UserForm addUser={this.AddNewUser} />
        
        <div className = "">
        <div className ="" >
           {this.state.users.map((field, index) => {
            return (
            <div >
            <UserInfo key={index } name = {field.name} expenditure={field.email} description={field.gen} />
            </div>
          
          );
        })}
        
        </div>
          
        </div>
       
        
       

      </div>
    )
  }
}

export default App;
