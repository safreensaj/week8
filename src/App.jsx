

function App(){
  const students = [
  { id: 1, name: "Anu" },
  { id: 2, name: "Meera" },
  { id: 3, name: "Sara" }
];
  return (
    <ul>
      {students.map((student)=>(
        <li key={student.id}>{student.name}</li>
      ))}

    </ul>
  )
}
export default App;