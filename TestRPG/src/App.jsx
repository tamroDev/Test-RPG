import { useState, useEffect } from "react";
import ItemNumber from "./components/ItemNumbers";

function App() {
  const [time, setTime] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [start, setStart] = useState(false);
  const [arrNumber, setArrNumber] = useState([]);
  const [numberFocus, setNumberFocus] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [isLose, setIsLose] = useState(false);

  useEffect(() => {
    let timeId;
    if (start) {
      timeId = setInterval(() => {
        setTime((prev) => parseFloat((prev + 0.1).toFixed(1)));
      }, 100);
    }

    return () => clearInterval(timeId);
  }, [start]);

  const shufflePositions = () => {
    return {
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
    };
  };

  const handleStart = (quantity) => {
    setArrNumber([]);
    setTime(0);
    setNumberFocus(0);
    setIsWin(false);

    for (let i = 0; i < quantity; i++) {
      const { top, left } = shufflePositions();
      const number = {
        id: i + 1,
        number: i + 1,
        top,
        left,
        zIndex: quantity - i,
      };

      setArrNumber((arrOld) => [...arrOld, number]);
    }

    setStart(true);
  };

  const handleDelete = (id) => {
    if (id === numberFocus + 1) {
      setArrNumber((arrOld) => arrOld.filter((item) => item.id !== id));

      if (arrNumber.length === 1) {
        setIsWin(true);
        setStart(false);
      }
    } else {
      setIsWin(false);
      setStart(false);
      setIsLose(true);
    }

    setNumberFocus(id);
  };

  return (
    <>
      <div className="w-[90vw] h-[95vh] flex justify-center items-center flex-col">
        <div className="flex flex-col w-[40%] h-[100%] gap-4 border-2 border-black p-3">
          <div className=" ">
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
              <div className="mb-3">
                <label className="mr-6">Time : </label>
                <span>{time} s</span>
              </div>

              <button
                onClick={() => handleStart(quantity)}
                className="px-5 py-1 border-2 border-black"
                disabled={quantity <= 0}
              >
                Restart
              </button>
            </div>
          </div>
          <div className="h-[90%] border-2 border-black p-2 relative">
            {arrNumber.map((item) => (
              <ItemNumber
                click={handleDelete}
                key={item.id}
                number={item.number}
                id={item.id}
                top={item.top}
                left={item.left}
                zIndex={item.zIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
