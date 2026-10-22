import useCounter from "./useCounter";
function Counter(){
    const {count,increase,decrease,reset}=useCounter();
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
              <button onClick={reset}>reset</button>
        </div>
    )
}
export default Counter;


// import Counter from "./Day3/Counter";
// function App(){
//   return (
//     <div>
// <Counter/>
//     </div>
//   )
// }
// export default App;