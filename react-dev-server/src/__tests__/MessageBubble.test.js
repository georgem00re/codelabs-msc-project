
import MessageBubble from "../components/MessageBubble/MessageBubble.js";
import ShallowRenderer from 'react-test-renderer/shallow';

describe("shallow render MessageBubble component", () => {

	const renderer = new ShallowRenderer();
	renderer.render(<MessageBubble/>);
	const res = renderer.getRenderOutput();

	test("expect top-level element to be <div>", () => {
		expect(res.type).toBe("div");
	})

	test("expect <div> child element", () => {
		expect(res.props.children.type).toBe("div");
	})

})
