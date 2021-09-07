import { getMarkForCommentThreadID } from "./EditorCommentUtils";
import { v4 as uuid } from "uuid";

const overlappingCommentThreadID = uuid();

const ExampleDocument = [
  {
    type: "h1",
    children: [{ text: "Document Title (Heading H1)" }],
  },
  {
    type: "h2",
    children: [{ text: "Subtitle (Heading H2)" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Text 1",
        [getMarkForCommentThreadID(uuid())]: true,
      },
      {
        text: "Text 2",
        [getMarkForCommentThreadID(overlappingCommentThreadID)]: true,
      },
      {
        text: "Text 3",
        bold: true,
        [getMarkForCommentThreadID(overlappingCommentThreadID)]: true,
        [getMarkForCommentThreadID(uuid())]: true,
      },
      {
        text: "Text 4",
        bold: true,
        [getMarkForCommentThreadID(uuid())]: true,
      },
      {
        text:
          " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      }
    ]
  }
];

export default ExampleDocument;
