test('renders internship finder heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Internship Finder/i);
  expect(linkElement).toBeInTheDocument();
});
