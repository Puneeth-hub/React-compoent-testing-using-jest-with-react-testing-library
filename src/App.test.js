import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react' 
import '@testing-library/jest-dom'
import App from './App'; 

test('should render the app component count id', () => {
    render(<App/>); 
    const countIdElement = screen.getByTestId("counts"); 
    expect(countIdElement).toBeInTheDocument();
}) 

test('should render the app h1 elemtent test', () => {
    render(<App/>); 
    const headText = screen.getByTestId("headtext") 
    expect(headText).toHaveTextContent('Vite + React');
})

test('button is present', () =>{
    render(<App/>) 
    const button = screen.getByRole('button'); 
    expect(button).toBeInTheDocument();
    
}) 

test('check the paragraph count', () =>{
    render(<App/>) 
    const paragraphCount =  screen.getAllByText(/./).filter((element) => element.tagName === 'P');

    expect(paragraphCount).toHaveLength(2)
})