import { GifItem} from "../../src/components/GifItem";
import { render, screen} from "@testing-library/react";

/* eslint-disable no-undef */
describe('Test in the component', () => {
   
    const title = 'Goku';
    const url = 'http://api//dragon';

    test('should match the snapshot', () => {
        const { container } = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test("Debe mostrar la imagen con el url y el alt", ()=> {
        render(<GifItem title={title} url={url}/>);
        
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    })

    test("Test in this compoent", ()=> {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
   
});

