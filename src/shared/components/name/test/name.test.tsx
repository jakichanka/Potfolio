/**
 * @jest-environment jsdom
 */

import { MyName } from ".."
import renderer from "react-test-renderer"

it("testing component with snapshot", () => {
  const component = renderer.create(<MyName />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
