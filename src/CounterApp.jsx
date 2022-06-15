import PropTypes from 'prop-types';
import { useState } from 'react'



    

export const CounterApp = ( { value } ) => {

    const [ counter, setCounter ] = useState( value );
    
    const handleSuma = () => {
       setCounter(counter + 1);
    }
  return (
    <> 
        <h1>Counter app</h1>
        <h2> { counter } </h2>
        <button onClick={ handleSuma }>
            Sumar 1 al counter
        </button>
    </>
  )
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

CounterApp.defaultProps = {
    value: 10
}
