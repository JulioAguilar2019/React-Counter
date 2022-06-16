describe('Pruebas en demo', () => {


    test('Esta prueba no debe fallar', () => {
        //Inicialzacion 
        const mess = "Hola mundo";
        //Estimulo
        const mess2 = mess.trim();
        //Observamos el comportamiento... esperado
        expect(mess).toBe(mess2);
    })

})