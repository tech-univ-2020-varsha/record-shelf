import { render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import GenreCard from '.';

describe('the genre card', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const { asFragment } = render(<Router history={history}><GenreCard cardName="pop" /></Router>);
    expect(asFragment).toMatchSnapshot();
  });
});
