import React,{useState} from "react";

const  Accordion =({items})=>{
    // const [activeIndex, setActiveIndex] = useState(null);
    const [activeIndices, setActiveIndices] = useState([])

    const handleClick = (index)=> {
        setActiveIndices((prevIndices) =>
            prevIndices.includes(index)
              ? prevIndices.filter((i) => i !== index)
              : [...prevIndices, index]
          );
    }
    return (
        <div>
            
            {items.map((item,index)=> (
                <div key={index} className="accordion-item">
                    <h3 className="accordion-title" onClick={() => handleClick(index)}>{item.title}</h3>
                    {activeIndices.includes(index) && <p>{item.content}</p>}

                </div>
            ))}
        </div>
    )
}
export default Accordion;