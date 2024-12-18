import { getGifs } from "../../src/helpers/getGifs";

/* eslint-disable no-undef */
describe('first', () => { 
  
    test('Test inside my api', async()=> {
        
        const gifs = await getGifs('Dragon Ball');
        expect(gifs.length).toBeGreaterThan(0);
        
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
         });
    }); 
});
    