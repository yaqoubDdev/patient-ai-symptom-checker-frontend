import { useEffect, useState } from 'react';
import services from './services/personService'
import './App.css'
import axios from 'axios';


function App() {
  
  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState(0)
  const [symptomsDes, setSymptomsDes] = useState('')

  const [allData, setAllData] = useState([])

  const getData = () => {
    services.getAll()
      .then(data => setAllData(data))
  }

  useEffect(() => {
    getData()
    console.log(allData);
  }, [])

    
    
  useEffect(() => {
    console.log(allData);
  }, [allData])
    
    

  const handleEvent = {
    handleUserName : function(event){
      setUserName(event.target.value)
    },
    handleUserAge: function(event){
      setUserAge(Number(event.target.value))
    },
    handleSymptomsDes: function(event){
      setSymptomsDes(event.target.value)
    },
    handleAllData: function(event){
      event.preventDefault()
      if(!userName || !userAge || !symptomsDes){
        alert('fill form first')
        return
      }
      const object = {userName, userAge, userSymptomsDescription: symptomsDes}
      services.create(object)
      .then(data => setAllData(d => [...d, data]))
      
      clear()
    }, 
  }
  
  function clear(){
    setUserName('')
    setUserAge(0)
    setSymptomsDes('')
  }

  

  return (
    <>
      <form onSubmit={handleEvent.handleAllData} id='p-form'>
        <p>Name: <input type="text" placeholder='Name' value={userName} onChange={handleEvent.handleUserName} /></p>
        <p>Age: <input type="number" placeholder='Age' value={userAge} onChange={handleEvent.handleUserAge}/></p>
        <p> Describe your symptoms <br /><textarea placeholder='Describe your symptoms'id='ttt' value={symptomsDes} onChange={handleEvent.handleSymptomsDes} ></textarea></p>
        <input type="submit"  />
      </form>

      <p>name: {userName}</p>
      <p>age: {userAge}</p>
      <p>symptoms: {symptomsDes}</p>
    </>
  )
}

export default App
