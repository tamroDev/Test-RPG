import ControlPanel from "./components/ControlPanel";
import ItemNumber from "./components/ItemNumbers";
import useLogicGame from "./customHooks/useLogicGame";

function App() {
  const {
    time,
    quantity,
    setQuantity,
    arrNumber,
    isWin,
    isLose,
    handleStart,
    handleDelete,
  } = useLogicGame();

  return (
    <div className="w-[90vw] h-[95vh] flex justify-center items-center flex-col">
      <div className="flex flex-col w-[40%] h-[100%] gap-4 border-2 border-black p-3">
        <ControlPanel
          quantity={quantity}
          setQuantity={setQuantity}
          handleStart={handleStart}
          time={time}
          isWin={isWin}
          isLose={isLose}
        />
        <div className="h-[90%]  border-2 border-black p-2 relative">
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
  );
}

export default App;
