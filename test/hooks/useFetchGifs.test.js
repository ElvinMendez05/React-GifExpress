import { renderHook, waitFor } from "@testing-library/react"
import {useFetchGifs} from "../../src/hooks/useFetchGifs";


/* eslint-disable no-undef */
describe('Test in kook useFetchGifs', ()=> {
   
    test('Debe regresar el estado inicial', ()=> {
       
        const {result} = renderHook( ()=> useFetchGifs('Dragon ball'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(1);
        expect(isLoading).toBeTruthy();

    })

    test('Debe retonar un arreglo de imagenes y isLoading in false', async()=> {
       
        const {result} = renderHook( ()=> useFetchGifs('Dragon ball'));

        waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBe(1);
        expect(isLoading).toBeTruthy();

    })
})