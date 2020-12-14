import React from "react";
import { render, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import  fetchColors  from "../api/fetchColors";
import { res } from "../data/res";

jest.mock("../api/fetchColors");

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  fetchColors.mockResolvedValueOnce(res);
  const { queryAllByText, queryByText, getByText } = render(<BubblePage />);
  await waitFor(() => {
    expect(getByText(/aliceblue/i)).toBeInTheDocument();
    expect(queryAllByText(/aqua/i)).toHaveLength(2);
    expect(queryByText(/red/i)).not.toBeInTheDocument();
  });
  
});
