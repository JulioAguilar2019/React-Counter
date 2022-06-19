import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('11 pruebas en funciones asincronas', () => {

    test('getImgaen debe retornar la url de la imagen', async () => {
        const url = await getImagen();


        expect(typeof url).toBe('string');
    })

})
