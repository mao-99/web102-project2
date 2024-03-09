import { useState } from "react"

export default function Card({question, answer}) {
    const [revealAnswer, setRevealAnswer] = useState(false)

    function handleReveal(){
        setRevealAnswer(!revealAnswer);
    }
    return (
        <>
        <div className="card" onClick={handleReveal} style={{backgroundColor:'#d6e2bd', width:'30vw', height:'50vh', minWidth:'500px', minHeight:'150px', display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', fontSize:'1.33rem', borderRadius:'8px', boxShadow:'0 0 10px rgba(154, 171, 158, 0.8)'}}>
            <p>{revealAnswer ? answer : question}</p>
        </div>
        </>
    )
}