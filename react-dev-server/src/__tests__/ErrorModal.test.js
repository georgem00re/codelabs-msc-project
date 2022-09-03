
import ErrorModal from "../components/ErrorModal/ErrorModal.js";
import { render, screen } from '@testing-library/react';
import ReactDOM from "react-dom";

describe("ErrorModal", () => {

	beforeAll(() => {
		ReactDOM.createPortal = jest.fn((element, node) => {
			return element;
		})
	})

	afterEach(() => {
		ReactDOM.createPortal.mockClear();
	})

	test("render ErrorModal component", () => {
		render(<ErrorModal/>);
	})

})