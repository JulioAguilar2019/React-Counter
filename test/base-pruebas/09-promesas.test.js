import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('09 Pruebas de promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                done();
            })
    })

    test('getHeroeByIdAsync debe obtener un error si heroe no existe', (done) => {
        const id = 109;

        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch(e => {
                expect(e).toBe('No se pudo encontrar el héroe ' + id)
                done();
            })

    })
})
