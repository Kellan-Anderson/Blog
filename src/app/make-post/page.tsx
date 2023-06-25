import { useEditor } from "~/hooks/useEditor";

export default function MakePostPage() {

  const { Editor, getText } = useEditor();

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="w-full flex justify-center py-3">
        <h2>Make a post</h2>
      </div>
      <div className="grow border border-slate-500 h-full rounded-lg lg:mx-8">
        <Editor />
      </div>
    </div>
  );
}