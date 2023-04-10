import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifts } from "../../src/hooks/useFetchGifts";

describe('Test on useFetchGifts', () => {
  
    test('should valid the initial state', () => {

        const { result } = renderHook( () => useFetchGifts('One Piece'));
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('should return an images array and isLoading in false', async() => {
       
        const { result } = renderHook( () => useFetchGifts('One Piece'));
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });
});
