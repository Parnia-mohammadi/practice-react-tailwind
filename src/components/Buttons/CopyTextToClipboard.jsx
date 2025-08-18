import { useState } from "react";

function CopyTextToClipboard() {
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async () => {
    if (text.trim() === "") return;
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 10000);
    } catch (err) {
      console.error("error during copy", err);
    }
  };

  return (
    <div className="m-10">
      <input
        type="text"
        placeholder="write some text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleCopy}
        className="bg-amber-300 text-cyan-950 px-4 py-2 rounded-lg"
      >
        Click to copy
      </button>
      {isCopied && (
        <div className="bg-green-400/50 w-1/3 fixed bottom-20 left-1/2 -translate-x-1/2 text-center py-4 rounded-xl ">{`Copied the text : ${text}`}</div>
      )}
    </div>
  );
}

export default CopyTextToClipboard;
