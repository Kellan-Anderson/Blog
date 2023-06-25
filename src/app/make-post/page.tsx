'use client'

import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm';
import { useState } from "react";
import { Textarea } from "~/components/ui/textarea";

export default function App() {
  const [value, setValue] = useState(`\`\`\`js
  console.log("Hello world");
  \`\`\`
  # Testing
  `);


  return (
    <div>
      <Textarea onChange={(e) => setValue(e.target.value)} />
      <div className="container">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {value}
        </ReactMarkdown>
      </div>
    </div>
  );
}