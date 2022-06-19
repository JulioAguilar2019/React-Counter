import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('08 Vamos a evaluar la funcion de heroes', () => {
    test('getHeroeById debe retornar un heroe', () => {
        const id = 1;

        const hero = getHeroeById(id);


        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })

    test('getHeroeById debe retornar un undefinied si un id que no existe', () => {
        const id = 100;

        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    })

    test('GetHeroesByOnwer debe retornar el numero exacto de registros de heroes de DC ', () => {
        const owner = "DC";

        const heroes = getHeroesByOwner(owner)

        expect(heroes).toHaveLength(heroes.length)

    })

    test('GetHeroesByOnwer debe comparar que los registros sean iguales ', () => {
        const owner = "DC";

        const listHeroes = getHeroesByOwner(owner);
        //metodo literal y estatico
        // expect(heroes).toEqual(
        //     [
        //         {
        //             id: 1,
        //             name: 'Batman',
        //             owner: 'DC',
        //         },
        //         {
        //             id: 3,
        //             name: 'Superman',
        //             owner: 'DC'
        //         },
        //         {
        //             id: 4,
        //             name: 'Flash',
        //             owner: 'DC'
        //         }
        //     ]
        // )


        //metodo adecuado y dinamico
        expect(listHeroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner));
    })

    test('GetHeroesByOnwer debe retornar el numero exacto de registros de heroes de Marvel', () => {
        const owner = "Marvel";

        const heroes = getHeroesByOwner(owner)

        expect(heroes).toHaveLength(heroes.length)
    })
})