import { render } from '../../test-utils/src'
import { StyledSystem } from '../src'

it('should render properly', () => {
  const { asFragment } = render(StyledSystem)
  expect(asFragment()).toMatchSnapshot()
})