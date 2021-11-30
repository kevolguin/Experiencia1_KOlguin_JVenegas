import {browser, element, by } from 'protractor';
 
describe('Duoc Market Test', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
    browser.get("/");
    });
    //creación de prueba 1
    it("El nombre del formulario se muestra correctamente", ()=>{
    expect(element(by.css(".nombre ion-item")).getText()).toContain("Nombre");
    }); //fin de prueba 1

    it("El inicio se muestra por correctamente", ()=>{
        expect(element(by.css(".inicio ion-card-content")).getText()).toContain("Una aplicacion exclusiva para estudiantes que te permitira poder comprar de forma segura y rapida");
    });
});
