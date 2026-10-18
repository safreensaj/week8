function StudentCard({name,course,batch}){
    return (
        <div>
            <h1>{name}</h1>
            <p>course: {course}</p>
            <p>Batch: {batch}</p>
        </div>
    )
}
export default StudentCard;