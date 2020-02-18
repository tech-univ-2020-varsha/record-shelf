import { render } from '@testing-library/react';
import React from 'react';
import SongCard from '.';

describe('the song list function', () => {
  it('should render card correctly', () => {
    const { asFragment } = render(<SongCard albumArtUrl="url" artists={['a', 'b']} albumName="name" />);
    expect(asFragment).toMatchSnapshot();
  });
});
