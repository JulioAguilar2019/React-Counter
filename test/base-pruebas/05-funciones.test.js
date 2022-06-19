import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en funciones 05', () => {
    test('Getuser debe retorar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(testUser).toStrictEqual(user);
    })

    test('getUsuarioActivo debe retornar un objeto con nombre', () => {

        const nombre = "Julio"

        const testUserActive = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);
        expect(testUserActive).toEqual( user);
    })
})