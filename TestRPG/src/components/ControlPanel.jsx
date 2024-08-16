import Timer from "./Timer";

const ControlPanel = ({
  quantity,
  setQuantity,
  handleStart,
  time,
  isWin,
  isLose,
}) => (
  <div className="h-auto">
    <h1 className="font-bold text-3xl mb-4">
      {isWin ? (
        <h1 className="text-green-400">You Win!</h1>
      ) : isLose ? (
        <h1 className="text-red-500">You Lose!</h1>
      ) : (
        <h1 className="text-black">LET'S PLAY</h1>
      )}
    </h1>
    <div className="h-full">
      <div className="h-auto">
        <label htmlFor="quantity">Points :</label>
        <input
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          type="number"
          id="quantity"
          className="ml-5 border-2 border-black p-2 text-[15px] w-[30%]"
        />
      </div>
      <Timer time={time} />
      <button
        onClick={() => handleStart(quantity)}
        className="px-5 py-1 border-2 border-black"
        disabled={quantity <= 0}
      >
        Restart
      </button>
    </div>
  </div>
);

export default ControlPanel;
