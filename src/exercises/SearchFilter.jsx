import React, { useState } from "react";

function SearchFilter() {
    const items = [
        "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    ];
const [searchInput, setSearchInput] = useState("");
const handleSearchChange =(e)=> {
    setSearchInput(e.target.value.toLowerCase());
};

const filteredItems = items.filter((item) => item.toLowerCase().includes(searchInput))


return (
    <div style={{textAlign:"center",marginTop:"50px"}}>
        <h1>Search Filter</h1>
        <input
         type="text"
         value={searchInput}
         onChange={handleSearchChange}
         placeholder="Search an item..."
         style={{
            padding:"10px",
            fontSize:"16px",
            width:"300px",
            marginBottom:"20px"
         }}
         />
         <ul style={{listStyleType:"none",padding:"0"}}>
            {filteredItems.length>0?(
            filteredItems.map((item,index) => (
                <li
                 key={index}
                 style={{margin:"10px 0",fontSize:"18px"}}
                >
                    {item}
                </li>)
            )):(<li style={{fontSize:"18px",color:"grey"}}>No Items Found.</li>)}
         </ul>
    </div>
)

}
export default SearchFilter;