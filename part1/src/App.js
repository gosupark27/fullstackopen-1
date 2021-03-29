import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header coursename={course.name}/>
      <Content name1={course.parts[0].name} number1={course.parts[0].exercises} name2={course.parts[1].name} number2={course.parts[1].exercises} name3={course.parts[2].name} number3={course.parts[2].exercises}/>
      <Total exernum={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>
    </div>
  )
}

export default App