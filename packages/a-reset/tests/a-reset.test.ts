import { render } from '../../test-utils/src'
import { AReset } from '../src'

it('should render properly', () => {
  const { asFragment } = render(AReset)
  expect(asFragment()).toMatchSnapshot()
})