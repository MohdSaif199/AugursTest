import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
    const increment = () => {
        setCounter(prev => prev + 1)
    }
    return (
        <div>
            <h2>Task 1 Increment the counter</h2>
            <Button variant='success' onClick={increment}>{counter}</Button>
        </div>
    )
}

export default Counter