import PropTypes from 'prop-types';
import { useState } from 'react'





export const CounterApp = ({ value }) => {


    console.log('render');

    const [counter, setCounter] = useState(value);

    const handleSuma = () => {
        setCounter(counter + 1);
    }
    

    const handleResta = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>Counter app</h1>
            <h2> {counter} </h2>
            <button onClick={ handleSuma }>Sumar 1 al counter</button>
            <button onClick={ handleResta }>Restar 1 al counter</button>
            <button onClick={ handleReset }>Resetear el counter</button>
            
        </>
    )
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

CounterApp.defaultProps = {
    value: 10
}

