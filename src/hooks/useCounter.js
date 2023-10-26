import { useState } from "react"

export const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue)

    const increment = (val = 1) => {
        setCount(prevCount => prevCount + val);
    }
    const decrease = (val = 1) => {
        if(count <= 0) {
            return
        } else if(count - val < 0){
            return reset()
        }
        setCount(prevCount => prevCount - val);
    }
    const reset = () => {
        setCount(0);
    }


  return {
    count,
    increment,
    reset,
    decrease 
  }
}
