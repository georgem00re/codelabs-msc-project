
import NavigationBar from "../components/NavigationBar/NavigationBar.js";
import ShallowRenderer from 'react-test-renderer/shallow';

describe("shallow render NavigationBar component", () => {

	const renderer = new ShallowRenderer();
	renderer.render(<NavigationBar backgroundColor={"black"}/>);
	const res = renderer.getRenderOutput();

	test("expect top-level element to be <nav>", () => {
		expect(res.type).toBe("nav");
	})

	test("expect 6 child elements", () => {
		expect(res.props.children.length).toBe(6);
	})

})