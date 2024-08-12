function ItemNumber({ number, click, id, top, left, zIndex }) {
  const positionStyle = {
    top: top,
    left: left,
    zIndex: zIndex,
  };

  return (
    <button
      onClick={() => click(id)}
      className="absolute bg-white font-bold w-[30px] h-[30px] border border-black rounded-full flex justify-center items-center cursor-pointer transition-all duration-400 focus:bg-red-500"
      style={positionStyle}
    >
      {number}
    </button>
  );
}

export default ItemNumber;
