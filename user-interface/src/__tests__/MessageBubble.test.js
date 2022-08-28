
import MessageBubble from "../components/MessageBubble/MessageBubble.js";
import { render, screen } from '@testing-library/react'

describe("MessageBubble", () => {

	test("render MessageBubble component", () => {
		render(<MessageBubble/>);
	})

})