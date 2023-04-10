import { useState } from "react";
import axios from "axios";

import { Quotes } from "./components/Quotes";
import { Button } from "./components/Button";

function App() {
  const [quote, setQuote] = useState("");

  const handleGenerateQuote = () => {
    // ЗАПРОС В OPENAI
    axios
      .get("http://localhost:8000/")
      .then((res) => setQuote(res.data.content));
  };

  return (
    <div>
      <Quotes quote={quote} />
      <Button handleGenerateQuote={handleGenerateQuote} />
    </div>
  );
}

export default App;
