
import NicknameModal from "../components/NicknameModal/NicknameModal.js";
import { render, screen } from '@testing-library/react';
import ReactDOM from "react-dom";

describe("NicknameModal", () => {

	beforeAll(() => {
		ReactDOM.createPortal = jest.fn((element, node) => {
			return element;
		})
	})

	afterEach(() => {
		ReactDOM.createPortal.mockClear();
	})

	test("render NicknameModal component", () => {
		render(<NicknameModal/>);
	})

})