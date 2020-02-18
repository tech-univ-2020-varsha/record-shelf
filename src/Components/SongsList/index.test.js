import { render } from '@testing-library/react';
import React from 'react';
import SongsList from '.';

xdescribe('the song list function', () => {
  it('should render correctly', () => {
    const mockProps = {
      props: {
        location: {
          state: {
            genreType: 'pop',
          },
        },
      },
    };
    const { asFragment } = render(<SongsList props={mockProps} />);
    expect(asFragment).toMatchSnapshot();
  });
});
