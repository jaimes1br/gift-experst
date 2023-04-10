import { render, screen } from "@testing-library/react"
import { GridItem } from "../../src/components/GridItem"

describe('Test on <GridItem/>', () => {
  
    const title = 'One piece';
    const url = 'https://one-piece.com/luffy.jpg';

    test('should match with snapshot', () => {
        
        const { container } = render(<GridItem title={ title } url={ url }/>);
        expect ( container ).toMatchSnapshot();
    });
   
    test('should show the image and alt text', () => {
        
        render(<GridItem title={ title } url={ url }/>);

        // expect(screen.getByRole('img').src).toBe( url );
        // expect(screen.getByRole('img').alt).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('should show the title in the component', () => {
        
        render(<GridItem title={ title } url={ url }/>);
        expect( screen.getByText( title )).toBeTruthy();
    });        
});
