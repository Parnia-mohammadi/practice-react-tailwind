import { X } from "lucide-react";

function ContactChip({ isOpen, onOpen }) {
  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-3xl m-10 w-fit bg-amber-200 text-cyan-950 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <img
        src="/img_avatar_woman.png"
        alt="avatar"
        className="w-10 rounded-full"
      />
      <p className="py-2">Parnia Mohammadi</p>
      <X size={20} className="mr-2" onClick={() => onOpen(false)} />
    </div>
  );
}

export default ContactChip;
