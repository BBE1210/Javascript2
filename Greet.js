import React from 'react'
// function Greet(params) {
//    return <h1>Life is a Gift: This is a Functional Component </h1>
    
//}
// Destructor Props in FUnctional Components
const Greet = props  => {
   const  {name, heroName} = props
    return (
<div>
    <h1>
        Hello {name} a.k.a {heroName}
    </h1>
</div>
    )
}

//
//const Greet = ({name, heroName}) => {
  //  return (
//<div>
//    <h1>
//        Hello {name} a.k.a {heroName}
//    </h1>
//</div>
//    )
//}
//const Greet = props => {
//    console.log(props) 
//   return (
//       <div>
 //   <h1>
//        Hello {props.name} a.k.a {props.heroName}
//    </h1>
//    {props.children}
//    </div>
//    )
//}
export default Greet 