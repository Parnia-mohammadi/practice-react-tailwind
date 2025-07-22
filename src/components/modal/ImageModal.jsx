import { XIcon } from "lucide-react";
import { useState } from "react";

function ImageModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 mx-10">
      <p>
        In this example, we use CSS to create a modal (dialog box) that is
        hidden by default. We use JavaScript to trigger the modal and to display
        the current image inside the modal when it is clicked on. Also note that
        we use the value from the image's "alt" attribute as an image caption
        text inside the modal.
      </p>
      <img
        onClick={() => setIsOpen(true)}
        src="/book.png"
        alt="a girl reading a book"
        className="mx-auto hover:opacity-70 cursor-pointer my-3 rounded-2xl border p-6"
      />
      <div
        className={`flex flex-col justify-between items-center text-black fixed top-0 left-0 transition-all duration-1000 ease-in-out *:transition-all *:duration-1000 *:ease-in-out ${
          isOpen
            ? " w-full h-screen p-6 bg-amber-400/80 *:scale-100 *:opacity-100"
            : "w-0 h-0 overflow-hidden *:overflow-hidden bg-transparent top-1/2 left-1/2 *:scale-0 *:opacity-0 "
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="self-end hover:scale-125"
        >
          <XIcon size={25} />
        </button>
        <img
          src="/book.png"
          alt="a girl reading a book"
          className={`top-1/2 left-1/2 absolute -translate-1/2 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <span>Caption</span>
      </div>
    </div>
  );
}

export default ImageModal;
