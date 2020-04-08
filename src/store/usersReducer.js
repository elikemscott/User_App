import { v4 as uuid } from 'uuid';

const initialState = {
    users: [
        {
          id: "1",
          name: "Name",
          email: "Email",
          gen: "Gen",
          
          
        }
      ],
}

const  usersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "ADD_USER":
            const newUser = {
              id: uuid(),
                name: action.payload.name,
                email: action.payload.email,
                gen: action.payload.gen
              };
              return {...state, users: [...state.users, newUser]}
              case "DELETE_USER":
              const filterdUsers = state.users.filter(user => user.id !==action.payload);
              return {...state, users: filterdUsers}
              case "EDIT_USER":
              const editedUsers = state.users.map(user => {
                if (user.id === action.user_id) {
                  return{...user, ...action.updated_info}
                }
                else{
                  return user;
                }
              });
              return{...state, users: editedUsers}
        default:
            return state;
    }

}

export default usersReducer;