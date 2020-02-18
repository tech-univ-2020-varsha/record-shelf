import { render } from '@testing-library/react';
import React from 'react';
import Genres from '.';

describe('the genres', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Genres />);
    expect(asFragment).toMatchSnapshot();
  });
});
