import { render, screen } from "@testing-library/react";
import { GiftGrid } from "../../src/components/GiftGrid";
import { useFetchGifts } from "../../src/hooks/useFetchGifts";

jest.mock('../../src/hooks/useFetchGifts');

describe('Test on <GiftGrid/>', () => {

    const category = 'One Piece';

    test('should show loading... ', () => {

        useFetchGifts.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GiftGrid category={ category }/>);
        expect( screen.getByText( 'Cargando...' )).toBeTruthy();
        expect( screen.getByText( category )).toBeTruthy();
    });
    
  test('should show items from useFetchGifts', () => {

    const images = [
        {
            id: 'ABC',
            title: 'Luffy',
            url: 'https://localhost/luffy.jpg'
        },
        {
            id: 'ABCD',
            title: 'Zoro',
            url: 'https://localhost/Zoro.jpg'
        },
    ];

    useFetchGifts.mockReturnValue({
        images,
        isLoading: false
    })

    const { container } = render(<GiftGrid category={ category }/>);
    expect( screen.getAllByRole('img').length).toBe(2);
    expect( container.getElementsByClassName('card').length).toBe(2);
  });
  
});
