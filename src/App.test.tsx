import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';




describe('App component',()=>{

  test('renders learn react link', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders App Component',()=>{
    render(<App/>);
    const nameText=screen.getByText('Sukhdeep');
    expect(nameText).toBeInTheDocument();
  })
})