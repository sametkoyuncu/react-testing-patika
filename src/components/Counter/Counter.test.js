import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Counter from './index'

// it('increase btn') veya
test('increase btn', () => {
  // component i render et
  render(<Counter />)
  // test etmek istediğim şeyi al - burada buton
  const increaseBtn = screen.getByText('Increase')
  // count u al -varsayılan '0' olduğu için ->
  const count = screen.getByText('0')
  // butona tıklat
  userEvent.click(increaseBtn)
  expect(count).toHaveTextContent('1')
})

test('decrease btn', () => {
  render(<Counter />)
  const decreaseBtn = screen.getByText('Decrease')
  const count = screen.getByText('0')
  userEvent.click(decreaseBtn)
  expect(count).toHaveTextContent('-1')
})
