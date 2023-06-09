import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Test on <AddCategory/>', () => {
  
    test('should change the text in the input', () => {
      
        render(<AddCategory onNewCategory={() =>{}}/>)
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'One Piece' }});

        expect( input.value ).toBe('One Piece');
    }); 

    test('should make submit and call onNewCategory if the value in input is valid', () => {
      
        const inputValue = 'One Piece';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue }});
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });
    
    test('should make the submit doing anything', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>)
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
        expect( onNewCategory ).not.toHaveBeenCalled();
    });
    
});
