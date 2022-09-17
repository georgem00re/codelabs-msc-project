
import MessageBubble from "../components/MessageBubble/MessageBubble.js";
import ShallowRenderer from 'react-test-renderer/shallow';

describe("MessageBubble", () => {

	test("shallow render MessageBubble component", () => {
		const renderer = new ShallowRenderer();
		renderer.render(<MessageBubble/>);
		const res = renderer.getRenderOutput();
		expect(res.type).toBe("div");
	})

})
