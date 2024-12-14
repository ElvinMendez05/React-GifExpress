import {render, screen, fireEvent} from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

/* eslint-disable no-undef */
describe('Test in <AddCatery/>', ()=> {
    
    test('Should change the value of the textbox', ()=> {
        //siempre hay que pasarle el onNewCategory
        render(<AddCategory onNewCategory={ () => {} } />);
        //aqui manipulamos el input 
        const input = screen.getByRole('textbox'); 
        //aqui lanzamos el evento
        fireEvent.input(input, {target: {value: 'Goku'}});
        expect(input.value).toBe('Goku');
   
    });

    test('Debe llamar onNewCategory if input has a value', ()=> {
        const inputValue = 'Goku';
        //un mock es una simulacion 
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/> )

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');

        //que alla sido llamada
        expect(onNewCategory).toHaveBeenCalled();
        //que alla sido llamada una sola vez
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        //que alla sido llamada con el input 
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        
    });

    test('No debe llamar el onNewCategory si el input esta vacio', ()=> {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/> )
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled(0);
        
    })
});