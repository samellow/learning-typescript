import { Greet } from "./components/Greet"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
import Status from "./components/Status"
import Heading from "./components/Heading"
import Oscar from "./components/Oscar"
function App() {
 
  const personName = {
    first: 'Sammy',
    last: 'Kariuki',
  }

  const nameList = [
    {
      first: 'Sammy',
      last: 'Kariuki',
    },
    {
      first: 'Sammy',
      last: 'Kariuki',
    },
    {
      first: 'Sammy',
      last: 'Kariuki',
    }
  ]
  return (

    
    <>
      <div className="app">
        <Greet name='Sammy'  isLoggedIn = {true}></Greet>
        <Person name = {personName}></Person>
        <PersonList names = {nameList}></PersonList>
        <Status status = 'loading'></Status>
        <Oscar>
          <Heading>Oscar goes to Denzel WashingTon</Heading>
        </Oscar>
      </div>
       
    </>
  )
}

export default App
