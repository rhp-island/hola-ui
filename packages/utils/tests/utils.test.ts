import { render } from '../../test-utils/src'
import { Utils } from '../src'

it('should render properly', () => {
  const { asFragment } = render(Utils)
  expect(asFragment()).toMatchSnapshot()
})