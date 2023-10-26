import { useCounter } from "../hooks/useCounter"

export const CountComponents = () => {
const { count, increment, reset, decrease } = useCounter(0)
  return (
    <>
      <h1> Count: {count}</h1>
      <button className="btn btn-primary" onClick={() => increment(1)}>+1</button>
      <button className="btn btn-danger" onClick={() => reset()}>Reset</button>
      <button className="btn btn-primary" onClick={() => decrease(10)}>-1</button>
    </>
  )
  
}
