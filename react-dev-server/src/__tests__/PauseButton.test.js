
import PauseButton from "../components/PauseButton/PauseButton.js";
import ShallowRenderer from 'react-test-renderer/shallow';

describe("shallow render PauseButton component", () => {

	const renderer = new ShallowRenderer();
	renderer.render(<PauseButton/>);
	const res = renderer.getRenderOutput();

	test("expect top-level element to be <button>", () => {
		expect(res.type).toBe("button");
	})

})