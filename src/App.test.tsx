import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';




describe('App component',()=>{


  test('renders App Component',()=>{
    render(<App/>);
    const nameText=screen.getByText('Sukhdeep');
    expect(nameText).toBeInTheDocument();
  })
})