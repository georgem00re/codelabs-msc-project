
import MessageInput from "../components/MessageInput/MessageInput.js";
import { render, screen } from '@testing-library/react'

describe("MessageInput", () => {

	test("render MessageInput component", () => {
		render(<MessageInput/>);
	})

})