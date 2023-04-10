import { getGifts } from "../../src/helpers/getGifts";

describe('Test on getGifts function', () => {
    
    test('should returns a gifts array ', async() => {
      
        const gifts = await getGifts('One piece');

        expect( gifts.length ).toBeGreaterThan( 0 );
        expect( gifts[0]).toEqual({
            id: expect.any( String  ),
            title:expect.any( String ),
            url:expect.any( String )
        });
    });  
});
