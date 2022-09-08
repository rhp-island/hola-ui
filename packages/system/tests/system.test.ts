import { render } from '../../test-utils/src'
import { System } from '../src'

it('should render properly', () => {
  const { asFragment } = render(System)
  expect(asFragment()).toMatchSnapshot()
})