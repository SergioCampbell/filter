import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Filter from './components/Filter/Filter';

it('get response from API', () => {
  const api = render.caller(
    <Filter />
  )
})
