import { render } from '../../test-utils/src'
import { Theme } from '../src'

it('should render properly', () => {
  const { asFragment } = render(Theme)
  expect(asFragment()).toMatchSnapshot()
})