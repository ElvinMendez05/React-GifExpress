import {render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
// eslint-disable-next-line no-undef
jest.mock('../../src/hooks/useFetchGifs');

/* eslint-disable no-undef */
describe('Test en GifGrid', () => {

    const category = 'Dragon Ball';
    
    test('Should show the loading', ()=> {

        useFetchGifs.mockReturnValue({
           images: [],
           isLoading: true,
        });
        
        render(<GifGrid category={category}/>)
        expect(screen.getAllByText('Loading...'));
        expect(screen.getByText(category));
        
        // screen.debug();
    });  

    test('Debe mostrar el items cuando se cargan las imagenes ', ()=> {
        const gifs = [{
            id: 1,
            title: 'Super sayayin',
            url: 'http://localhost//gif.com',
        }]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
         });

        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(1);
    })
 });