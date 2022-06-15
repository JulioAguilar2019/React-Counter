import PropTypes from 'prop-types';
import { useState } from 'react'



    const handleSuma = () => {
        // console.log(event)
    }

export const CounterApp = ( { value } ) => {

    const [ counter ] = useState( 10 );
    

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
    counter: PropTypes.number.isRequired
};

CounterApp.defaultProps = {
    counter: 10
}
