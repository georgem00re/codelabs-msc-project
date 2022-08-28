
import MuteButton from "../components/MuteButton/MuteButton.js";
import { render, screen } from '@testing-library/react'

describe("MuteButton", () => {

	test("render MuteButton component", () => {
		render(<MuteButton/>);
	})

})