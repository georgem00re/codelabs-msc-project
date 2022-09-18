
import MessageInput from "../components/MessageInput/MessageInput.js";
import ShallowRenderer from 'react-test-renderer/shallow';

describe("shallow render MessageInput component", () => {

	const renderer = new ShallowRenderer();
	renderer.render(<MessageInput/>);
	const res = renderer.getRenderOutput();

	test("expect top-level element to be div", () => {
		expect(res.type).toBe("div");
	})

	test("expect <input> child element", () => {
		expect(res.props.children[0].type).toBe("input");
	})

	test("expect <button> child element", () => {
		expect(res.props.children[1].type).toBe("button");
	})

})