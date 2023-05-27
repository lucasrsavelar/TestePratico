import React from 'react'
import { render, fireEvent, } from '@testing-library/react-native';
import Contador from '../Contador';

describe('Contador', () => {
    test('A contagem funciona corretamente', () => {
        const { debug, getByTestId, getByText, } = render(<Contador />)

        const botaoIncrementar = getByTestId('botaoIncrementar');

        fireEvent.press(botaoIncrementar);

        const resultadoContador = getByText('Contador: 1');

        expect(resultadoContador).toBeTruthy()
    });
});