import { useState, useEffect } from "react";
import shufflePositions from "../tools/shufflePositions";
const useLogicGame = () => {
  const [time, setTime] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [start, setStart] = useState(false);
  const [arrNumber, setArrNumber] = useState([]);
  const [numberFocus, setNumberFocus] = useState(1);
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

  const handleStart = (quantity) => {
    setArrNumber([]);
    setTime(0);
    setNumberFocus(0);
    setIsWin(false);
    setIsLose(false);

    for (let i = 0; i < quantity; i++) {
      const { top, left } = shufflePositions();
      const number = {
        id: i + 1,
        number: i + 1,
        top,
        left,
        zIndex: quantity - i,
      };
      //   spread operator
      setArrNumber((arrOld) => [...arrOld, number]);
    }

    setStart(true);
  };

  const handleDelete = (id) => {
    if (id === numberFocus + 1) {
      setArrNumber((arrOld) => arrOld.filter((item) => item.id !== id));
      // Nếu arrNumber.length trở thành 1, điều này có nghĩa là chỉ còn một số duy nhất trong mảng. Số này là số cuối cùng cần được nhấp.
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
    console.log(numberFocus);
  };
  return {
    time,
    quantity,
    setQuantity,
    start,
    arrNumber,
    isWin,
    isLose,
    handleStart,
    handleDelete,
  };
};

export default useLogicGame;
