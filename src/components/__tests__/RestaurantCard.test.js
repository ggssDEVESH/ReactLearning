import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedRestaurantCard } from "../RestaurantCard"
import MOCK_DATA from '../mocks/resCard.json';
import '@testing-library/jest-dom';


it("should render ResCard with props data", () => {
    render(<RestaurantCard resList= {MOCK_DATA}/>)
    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
})
