import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Audie', 'Kahlil', 'Gibran','Kahlil']
    const persons = [
        {
        id: 1,
        name: 'Audie',
        age: 30,
        skill: 'React' 
        },
        
        {
        id: 2,
        name: 'Kahlil',
        age: 42,
        skill: 'Engineering' 
        },
        
        {
        id: 3,
        name: 'Gibran',
        age: 23,
        skill: 'Economics' 
        }
    ]

    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
  
}
export default NameList

 // Method 1
 //<div>
          //  <h2>{names[0]}</h2>
           // <h2>{names[1]}</h2>
           // <h2>{names[2]}</h2>
  //         </div>
  // Method 3
 // function NameList() {
 //   const names = ['Audie', 'Kahlil', 'Gibran']
  //  const nameList = names.map(name => <h2>{name}</h2>)
 //   return (
  //      <div>
  //        {nameList}
  //      </div>
  //  )
// Method 2
 // function NameList() {
 //   const names = ['Audie', 'Kahlil', 'Gibran']
  //  
 //   return (
  //      <div>
  //          names.map(name => <h2>{name}</h2>)
  //      </div>
  //  
  //function NameList() {
  //  const names = ['Audie', 'Kahlil', 'Gibran']
  //  const nameList = names.map(name => <h2>{name}</h2>)
  //  return (
  //      <div>
   //       {nameList}
   //     </div>

   // Method 4
   //const personList = persons.map(person => <Person key={persons.name} person={person} />)
    //return <div>{personList}</div> 
   // ))
