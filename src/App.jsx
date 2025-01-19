import Counter from "./exercises/Counter"
import Toggle from "./exercises/Toggle"
import FormValidation from "./exercises/FormValidation"
import ToDoList from "./exercises/ToDoLIst"
import FetchData from "./exercises/FetchData"
import Timer from "./exercises/Timer"
import Conditional from "./exercises/Conditional"
import RandomQuote from "./exercises/RandomQuote"
import SearchFilter from "./exercises/SearchFilter"
import Accordion from "./exercises/Accordion"

function App() {

  const items = [
    { title: "What is React?", content: "React is a library for building UIs." },
    { title: "Why use React?", content: "React is declarative, flexible, and efficient." },{
      title: "How does React work?",
      content: "React uses a virtual DOM to efficiently update the UI.",
    },
  ]

  return ( 
    <div>
      {/* <h1>React Exercises</h1> */}
      {/* <Counter/> */}
      {/* <Toggle /> */}
      {/* <FormValidation/> */}
      {/* <ToDoList/> */}
      {/* <FetchData /> */}
      {/* <Timer/> */}
      {/* <Conditional/> */}
      {/* <RandomQuote /> */}
      {/* <SearchFilter /> */}
      <h1>React Accordion</h1>
      <Accordion items={items}/>

    </div>
  )

}

export default App
