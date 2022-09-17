
import MuteButton from "../components/MuteButton/MuteButton.js";
import ShallowRenderer from 'react-test-renderer/shallow';

describe("MuteButton", () => {

	test("shallow render MuteButton component", () => {
		const renderer = new ShallowRenderer();
		renderer.render(<MuteButton/>);
		const res = renderer.getRenderOutput();
		expect(res.type).toBe("button");
	})

})