import { number } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('07 pruebas en desestructuracion', () => {
    test('Debe retornar un string y un numero', () => {

        const [letters, numbers] = retornaArreglo();

        expect(letters).toEqual(expect.any(String));
        expect(numbers).toEqual(expect.any(Number));
    })
})
