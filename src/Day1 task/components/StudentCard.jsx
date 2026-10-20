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

/*{import StudentCard from "./Day1 task/components/StudentCard"
function App(){
   const students = [
    { id: 1, name: "Aysha", course: "JavaScript", batch: "2025" },
    { id: 2, name: "Sana", course: "React", batch: "2026" },
    { id: 3, name: "Rahul", course: "MongoDB", batch: "2026" },
  ];
  return (
  <div>
{students.map((student)=>(
  <StudentCard key={student.id}
id={student.id}
name={student.name}
course={student.course}
batch={student.batch}
  />
))}
  </div>
  )
}
export default App;
}*/