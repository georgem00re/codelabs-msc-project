
import MuteButton from "../components/MuteButton/MuteButton.js";
import ShallowRenderer from 'react-test-renderer/shallow';

describe("shallow render MuteButton component", () => {

	const renderer = new ShallowRenderer();
	renderer.render(<MuteButton/>);
	const res = renderer.getRenderOutput();

	test("expect top-level element to be <button>", () => {
		expect(res.type).toBe("button");
	})

})