//props use
function Student(props){
    return (
        <div>
            <h4>  {props.name} </h4> 
            <h4>  {props.email} </h4>
            <h4>  {props.city} </h4>
        </div>
    )
}

export default Student;