export const Button = (props) => {
  return (
    <button
      onClick={props.handleGenerateQuote}
      className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md py-2 px-4 inline-flex items-center justify-center"
    >
      <span className="text-white">Generate Quote</span>
    </button>
  );
};
