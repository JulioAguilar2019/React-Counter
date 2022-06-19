
import { render, screen } from "@testing-library/react"
import { HelloWordApp } from "../src/HelloWordApp"

describe('Esta es mi primera prueba en react', () => {

    const title = 'Hola soy Julio'
    const subTitle = 'Soy un subtitulo'
    
    test('La primera prueba debe hacer match con el snapshot', () => {

        const { container } = render(<HelloWordApp title={title} />)
        expect(container).toMatchSnapshot();
    })

    test('Debe de mostrar el mensaje Hola soy julio', () => {

        render(<HelloWordApp title={title} />)

        expect(screen.getByText(title)).toBeTruthy();
    })

    test('Debe de mostrar el titulo en un h1', () => {

        render(<HelloWordApp title={title} />)
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
        // console.log(screen.getByRole('heading', { leve: 1 }).innerHTML )
    })

    test('Debe de enviar el subtitulo enviado por props', () => {

        render(
            <HelloWordApp
                title={title}
                subTitle={subTitle}
            />);

            expect(screen.getAllByText(subTitle).length).toBe(2);

    })


});