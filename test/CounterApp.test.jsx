
import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Estas son las pruebas para el counter app', () => {

    const initValue = 10;

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<CounterApp />)

        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar el valor inicial de 100', () => {

        render(<CounterApp value={100} />)

        expect(screen.getByText(100)).toBeTruthy();
    });

    test('Debe de incrementar con el boton sumar 1', () => {

        render(<CounterApp value={ initValue } />);
        fireEvent.click(screen.getByText('Sumar 1 al counter'))
        expect(screen.getByText('11') ).toBeTruthy();
    });

    test('Debe de restar con el boton restar 1', () => {

        render(<CounterApp value={ initValue } />);
        fireEvent.click(screen.getByText('Restar 1 al counter'))
        expect(screen.getByText('9') ).toBeTruthy();
    });

    test('Debe de resetear el counter con el boton resetear counter', () => {

        render(<CounterApp value={ initValue } />);
        fireEvent.click(screen.getByText('Restar 1 al counter'))
        fireEvent.click(screen.getByText('Restar 1 al counter'))
        // fireEvent.click(screen.getByText('Resetear el counter'))
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByText('10') ).toBeTruthy();
        
    });


});