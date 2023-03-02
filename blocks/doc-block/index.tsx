import { FileBlockProps } from "@githubnext/blocks";
import asciidoctor from "asciidoctor";

import "@asciidoctor/core/dist/css/asciidoctor.css";
import "./index.css";

export default function DocBlock(props: FileBlockProps) {
  const { content } = props;

  const docProcessor = asciidoctor();
  const renderedContent = docProcessor.convert(content) as string;

  return (
    <div className="doc_block__content" dangerouslySetInnerHTML={{__html: renderedContent}}></div>
  );
}
