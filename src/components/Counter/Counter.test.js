import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Counter from './index'

describe('Counter Tests', () => {
  let increaseBtn, decreaseBtn, count
  //herbiri çalışmadan önce yapılacaklar
  beforeEach(() => {
    // component i render et
    render(<Counter />)
    // test etmek istediğim şeyi al - burada buton
    increaseBtn = screen.getByText('Increase')
    decreaseBtn = screen.getByText('Decrease')
    // count u al -varsayılan '0' olduğu için ->
    count = screen.getByText('0')
  })

  // tüm testlerden önce bir kez çalışır
  // beforeAll

  // afterAll

  // afterEach

  test('increase btn', () => {
    // butona tıklat
    userEvent.click(increaseBtn)
    expect(count).toHaveTextContent('1')
  })

  test('decrease btn', () => {
    userEvent.click(decreaseBtn)
    expect(count).toHaveTextContent('-1')
  })
})
