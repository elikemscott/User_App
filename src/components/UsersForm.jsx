import React, { Component } from 'react'

class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'',
            email:'',
            gen:'',
             
        }
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
          name: this.state.name,
          email: this.state.email,
          gen: this.state.gen,
        
        };
        this.props.addUser(newUser) 
        this.setState({
          name:'',
          email:'',
          gen:'',
        });
      };

    render() {
        return (
            <div className="">
            <p className = ""></p>
    
              <form onSubmit = {this.handleSubmit}>
            
               <span><input placeholder="Name" type ="text" name ="name" value={this.state.name} className ="name" onChange={this.handleChange} /></span><br />
               <span><input placeholder="Email" name ="email" type ="number" value={this.state.email} onChange={this.handleChange} /></span><br />
               <span><input type = " text" name ="gen" placeholder="Gen"value={this.state.gen} onChange ={this.handleChange}  /></span><br />
                <button type="submit">Submit</button>
    
             
          
               </form>
            </div>
        )
    }
}

export default UserForm;
