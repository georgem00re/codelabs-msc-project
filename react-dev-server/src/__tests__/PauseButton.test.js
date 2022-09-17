
import PauseButton from "../components/PauseButton/PauseButton.js";
import ShallowRenderer from 'react-test-renderer/shallow';

describe("PauseButton", () => {

	test("shallow render PauseButton component", () => {
		const renderer = new ShallowRenderer();
		renderer.render(<PauseButton/>);
		const res = renderer.getRenderOutput();
		expect(res.type).toBe("button");
	})

})