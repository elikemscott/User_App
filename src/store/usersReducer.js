const initialState = {
    users: [
        {
          category: "Category",
          description: "Description",
          amount: "Amount",
          date: "",
          
        }
      ],
}

const  usersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "ADD_USER":
            const newUser = {
                category: action.payload.category,
                description: action.payload.description,
                amount: action.payload.amount,
                date: action.payload.date
              };
              return {...state, users: [...state.users, newUser]}
            
    
        default:
            return state;
    }

}

export default usersReducer;