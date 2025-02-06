import { useState } from 'react'
import './Demo1.css'

function Demo1() {

    const [ state, setState ] = useState(0)

    let counter = 0

    function addCounter() {
        counter++
        console.log(counter)
    }

    function userAlert() {
        alert('Boo!!')
    }

  return (
    <div>
        <div className="demo1-container">
            <p>Demo1</p>

            <div className="button-container">
                <button onClick={userAlert}>nominal</button>
                <button onClick={ () => {alert('--->')}}>arrow</button>
            

            <div className="counter-container">
                <button onClick={addCounter}>counter</button>
            </div>
        </div>

            <div className='state-container'>
                <button onClick={ () => setState(state + 1)}>+1</button> 
                <button onClick={ () => setState(state - 1)}>-1</button> 
                state { state } 
            </div>

        </div>
    </div>
  )
}

export default Demo1
