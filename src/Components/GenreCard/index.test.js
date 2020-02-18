import { render } from '@testing-library/react';
import React from 'react';
import GenreCard from '.';

describe('the genre card', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<GenreCard />);
    expect(asFragment).toMatchSnapshot();
  });
});
