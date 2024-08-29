import React from "react";

export const formatNewLine = (text: string) => {
  return text.split("\n").map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < text.split("\n").length - 1 && <br />}
    </React.Fragment>
  ));
};
