
import NavigationBar from "../components/NavigationBar/NavigationBar.js";
import ShallowRenderer from 'react-test-renderer/shallow';

describe("NavigationBar", () => {

	test("shallow render NavigationBar component", () => {
		const renderer = new ShallowRenderer();
		renderer.render(<NavigationBar backgroundColor={"black"}/>);
		const res = renderer.getRenderOutput();
		expect(res.type).toBe("nav");
	})

})