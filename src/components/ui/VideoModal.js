const VideoModal = ({ isOpen, setIsOpen, video }) => {
  if (!isOpen) {
    return <></>;
  }

  const videSource = `${video.videoSource}?autoplay=1&controls=0&loop=1`

  return (
    <div
      onClick={() => {
        setIsOpen(false);
      }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
    >
      <div className="relative max-w-5xl mx-auto">
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={videSource}
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
