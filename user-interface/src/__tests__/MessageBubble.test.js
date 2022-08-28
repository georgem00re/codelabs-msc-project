
import MessageBubble from "../components/MessageBubble/MessageBubble.js";
import { render, screen } from '@testing-library/react'
import ShallowRenderer from 'react-test-renderer/shallow';

describe("MessageBubble", () => {

	test("render MessageBubble component", () => {
		render(<MessageBubble/>);
	})

	test("shallow render MessageBubble component", () => {
		const renderer = new ShallowRenderer();
		renderer.render(<MessageBubble/>);
		const result = renderer.getRenderOutput();
	})

})