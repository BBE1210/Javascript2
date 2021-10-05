import React from "react";
const Hello = () => {
 //   return (
 //      <div classname='dummyclass'>
 //       <h1>Hello Humans</h1>
  //      </div>
   // )
   return React.createElement(
       'div',
     //  null,
     {id: 'hello', className: 'dummyClass'},
       React.createElement('h1', null,
        'Hello Human: This is a JSX test')
   )
}
export default Hello