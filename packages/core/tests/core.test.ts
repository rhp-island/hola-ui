import { render } from '../../test-utils/src'
import { Core } from '../src'

it('should render properly', () => {
  const { asFragment } = render(Core)
  expect(asFragment()).toMatchSnapshot()
})