
import PauseButton from "../components/PauseButton/PauseButton.js";
import { render, screen } from '@testing-library/react'

describe("PauseButton", () => {

	test("render PauseButton component", () => {
		render(<PauseButton/>);
	})

})