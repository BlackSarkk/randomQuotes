import { useEffect, useState } from "react";
import Buttton from "../components/ui/Buttton";
import TextBox from "../components/ui/TextBox";
import axios from "axios";

const Home = () => {
  const [quote, setQuote] = useState<{ content: string; author: string } | null>(null);

  const fetchQuote = async () => {
    try {
      const response = await axios.get("/api/v1/quotes");
      setQuote(response.data.quote); 
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-20">
      <div className="flex flex-col items-center justify-between gap-10 h-[40vh] w-[65vw]">
        {quote ? (
          <>
            <TextBox variant="quote" texts={`“${quote.content}”`} size="xl" />
            <TextBox variant="author" texts={`- ${quote.author}`} size="sm" />
          </>
        ) : (
          <TextBox variant="quote" texts="Loading..." size="md" />
        )}
        <Buttton
          size="lg"
          varient="primary"
          text="Generate New Quote"
          onClick={fetchQuote}
        />
      </div>
    </div>
  );
};

export default Home;
