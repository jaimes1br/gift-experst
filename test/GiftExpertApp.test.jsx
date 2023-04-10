import { render, screen } from "@testing-library/react"
import GiftExpertApp from "../src/GiftExpertApp"

describe('Test on <GiftExpertApp/>', () => {
  
    test('should show just one category', () => {
        const category = 'One piece';

        render(<GiftExpertApp/>);

        expect(screen.getAllByText( `${category}`).length).toBe(1)
        expect(screen.getByRole( 'heading',{level: 3}).innerHTML).toBe(`${category}`)
    });
   
     
});
