import { render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Genres from '.';

describe('the genres', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const { asFragment } = render(
      <Router history={history}><Genres /></Router>,
    );
    expect(asFragment).toMatchSnapshot();
  });
});
