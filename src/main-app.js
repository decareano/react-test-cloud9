import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Form from "./Form"
import Table from './Table'

class MainApp extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
      characters: []
    };
   
   }

   handleSubmit = (character) => {
   // deleted the spread operator...will I be able to print values????
   this.setState({ characters: [...this.state.characters, character] })
   }

   removeCharacter = (removeId) =>  {
      //resolved in class
      const { characters } = this.state;
      console.log(removeId)
      this.setState({
        characters: characters.filter((character) => {
          return character.id !== removeId;
        })
      })
      
    }


   render() {
      const { characters } = this.state;
      
  return (

   
              
  <div>
   
   <Form handleSubmit={this.handleSubmit} />
   <Table marceloData={characters.sort((a, b) => {

       let da = new Date(a.date),
       db = new Date(b.date)
       //console.log(da)
       //console.log(db)
       return db - da
   })}  removeCharacter={this.removeCharacter} />
   </div>
 )
};
   
}



// class LoginButton extends React.Component {
//     render() {
//         const { loginWithRedirect } = this.props.withAuth0
//     return (
//         <button
//       className="btn btn-primary btn-block"
//       onClick={() => loginWithRedirect()}
//     >
//       Log In
//     </button>
//   );
//     }
// }

export default MainApp