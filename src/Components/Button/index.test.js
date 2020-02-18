import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';

describe('the button component', () => {
  it('should render the button corretly', () => {
    const { asFragment } = render(<Button testId="test-btn">Test text</Button>);

    expect(asFragment()).toMatchSnapshot();
  });
  it('should call the onClick prop when the button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Button testId="test-btn" buttonOnClick={onClickMock}>test text</Button>);
    fireEvent.click(getByTestId('test-btn'));
    expect(onClickMock).toHaveBeenCalled();
  });
});
