
import { render } from "@testing-library/react"
import { HelloWordApp } from "../src/HelloWordApp"

describe('Esta es mi primera prueba en react', () => {

    // test('Debe hacer match con el snapshot', () => {

    //     const title = 'Hola. soy Julio'
    //     const { container } = render(<HelloWordApp title={title} />)

    //     expect(container).toMatchSnapshot();

    // });


    test('Debe de mostrar el titulo en un h1', () => {
        const title = 'Hola. soy Julio'
        const { container, getByText, getByTestId } = render(<HelloWordApp title={title} />)

        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title );

        expect(getByTestId('test-title').innerHTML).toContain(title);

    });

    test('debe mostrar el subtitulo enviado por props', () => {
        const title = 'Hola. soy Julio'
        const subTitle = 'soy un subtitulo'
        const {  getAllByText } = render(
        <HelloWordApp 
            title={ title } 
            subTitle={ subTitle }
            />)

        expect(getAllByText(subTitle).length ).toBe(2);

    })

});