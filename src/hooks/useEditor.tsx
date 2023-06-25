import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm';
import { useState } from "react";
import { Textarea } from "~/components/ui/textarea";

export function useEditor() {
  const defaultStr = "## Type something to see it appear here"
  const [value, setValue] = useState(defaultStr);

  const getText = () => {
    return value;
  }

  const Editor = () => {
    return (
      <div className="flex flex-row h-full">
        <Textarea onChange={(e) => setValue(e.target.value)} className="rounded-r-none" />
        <div className="container py-2">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {value === "" ? defaultStr : value}
          </ReactMarkdown>
        </div>
      </div>
    )
  };

  return {
    Editor,
    getText
  }
}