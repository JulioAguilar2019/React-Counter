import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('06 pruebas de desustructuracion', () => {

    test('Esta prueba deberia lanzarme retornar un objeto', () => {
        const clave = "1234"
        const edad = 20

        const soldadoDesc = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const soldado = usContext(clave, edad);

        expect(soldado).toEqual(soldadoDesc)
    })

})