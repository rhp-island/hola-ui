import { render } from '../../test-utils/src'
import { ThemeTools } from '../src'

it('should render properly', () => {
  const { asFragment } = render(ThemeTools)
  expect(asFragment()).toMatchSnapshot()
})