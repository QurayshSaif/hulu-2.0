import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

export default function Results({ results }) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
      {results.map((result) => (
        <Thumbnail key={results.id} result={result} />
      ))}
    </FlipMove>
  );
}
