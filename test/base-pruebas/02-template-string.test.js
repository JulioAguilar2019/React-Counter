import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en el archivo template String', () => {
    test('getSaludo debe retornar "Hola Julio"', () => {

        const name = "Julio";
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`)
    })
})