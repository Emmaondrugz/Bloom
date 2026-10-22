import { Fragment } from "react";

export default function RevealWords({ lines }: { lines: string[] }) {
  return lines.map((line, lineIndex) => (
    <Fragment key={lineIndex}>
      {line.split(/\s+/).map((word, wordIndex) => (
        <Fragment key={wordIndex}>
          {wordIndex > 0 && " "}
          <span data-heading-word className="inline-block">
            {word}
          </span>
        </Fragment>
      ))}
      {lineIndex < lines.length - 1 && <br />}
    </Fragment>
  ));
}
