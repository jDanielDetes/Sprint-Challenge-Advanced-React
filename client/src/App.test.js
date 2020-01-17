import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('App renders without crashing', () => {
  render(<App/>)
})

test('should ', () => {
  const container = render(<App/>)
  container.getByText("test")
})
