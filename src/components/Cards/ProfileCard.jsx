function ProfileCard() {
  return (
    <div className="lg:w-1/5 md:w-1/4 w-1/3 m-10 group rounded-2xl overflow-hidden shadow-[10px_15px_20px_0px_rgba(0,0,0,0.4)]">
      <img
        src="/img_avatar_woman.png"
        alt="woman-avatar"
        className="group-hover:animate-shake"
      />
      <div className="p-4">
        <p className="text-xl font-bold mb-4">Parnia Mohammadi</p>
        <p>Frontend Developer</p>
      </div>
    </div>
  );
}

export default ProfileCard;
