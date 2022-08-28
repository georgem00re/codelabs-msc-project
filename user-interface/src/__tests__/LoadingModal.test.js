
import LoadingModal from "../components/LoadingModal/LoadingModal.js";
import { render, screen } from '@testing-library/react';
import ReactDOM from "react-dom";

describe("LoadingModal", () => {

	beforeAll(() => {
		ReactDOM.createPortal = jest.fn((element, node) => {
			return element;
		})
	})

	afterEach(() => {
		ReactDOM.createPortal.mockClear();
	})

	test("render LoadingModal component", () => {
		render(<LoadingModal/>);
	})

})