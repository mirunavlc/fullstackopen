const Part = ({part})=>{
    console.log(part);
    return(
        
        <p>{part.name} <b>{part.exercises}</b></p>
        
    )
}

export default Part;