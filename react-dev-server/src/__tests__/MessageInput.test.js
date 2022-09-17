
import MessageInput from "../components/MessageInput/MessageInput.js";
import ShallowRenderer from 'react-test-renderer/shallow';

describe("MessageInput", () => {

	test("shallow render MessageInput component", () => {
		const renderer = new ShallowRenderer();
		renderer.render(<MessageInput/>);
		const res = renderer.getRenderOutput();
		expect(res.type).toBe("div");
	})

})