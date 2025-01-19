import React,{useEffect, useState} from 'react';

function RandomQuote() {
    // const quotes = [
        
    //  "he shall know you’re ways  as though born to them- dune",

    // " You are not the devil. You’re practice- Batman begins",
    // "People  need dramatic example to shake them out of apathy. And i can not do that as Bruce Wayne. As a man… I’m flesh and blood,  I can be ignored, destroyed. But as a symbol. As a symbol , I can be incorruptible. I can be ever lasting.  Something elemental , something terrifying - Batman begins",
    // "Sometimes it is the very people who no one imagines anything of , who do the thing that no one can imagines- Imitation game",
    // "Some people are born to fight, i think. It’s not thar they’re born brave. It’s not that they’re born strong. It’s just that the universe has decided that this one, this one will have grit and fire and steel in their blood . And it’ll be tested , this cosmic mettle of theirs . They’ll face trial after trial, be broken and damaged in countless ways. But this one was born to fight. May be its to the life they would have chosen. May be they’d love to lay down their arms . But they were born to fight.- announymus",
    // "suffering builds character - The Dark knight rises",
    // "There are dreamers and there are realists in this world. You'd think the dreamers would find the dreamers and the realists would find the realists, but more often than not, the opposite is true. You see,the dreamers need the realists to keep them from soaring too close to the sun.And the realists, well without the dreamers they might not ever get off the ground.  - The Modern Family- Cameron Tucker"
    // ];
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    // const selectRandomQuote = () => {
    //     const randomIndex = Math.floor(Math.random()*quotes.length);
    //     setQuote(quotes[randomIndex]);
    // }
    const fetchQuote = async() => {
        try {
            
        const response = await fetch('https://dummyjson.com/quotes/random');
        const data = await response.json();
        setQuote(data.quote);
        setAuthor(data.author);
        } catch (error) {
            console.log("Error while fetching Data",error);
        }
    }
    useEffect(() => {
        fetchQuote();
    },[])

    return(
        <div>
            <h1>Random Quote Generator</h1>
            <p>&quot;{quote}&quot;</p>
            <p style={{fontWeight:"bold"}}>{author}</p>
            <button
            //  onClick={selectRandomQuote}
            onClick={fetchQuote}
             >
                Generate Quote
            </button>
        </div>
    )

}
export default RandomQuote;