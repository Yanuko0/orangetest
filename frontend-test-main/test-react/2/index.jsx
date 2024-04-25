export default function React_2() {
  // 請在這個 function 內作答
  const [seconds, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const secondsFormat = useMemo(() => {
  const remainingSeconds = seconds % 60; 
  const remainingMinutes = Math.floor(seconds / 60); 
  const formattedMinutes = String(remainingMinutes).padStart(2, '0');
  return `${formattedMinutes}:${remainingSeconds >= 10 ? remainingSeconds : `0${remainingSeconds}`}`;
    }, [seconds]);

   const startTimer = () => {
    let intervalId;
    if(isRunning) {
        intervalId= setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
    }
    return () => clearInterval(intervalId);
};


useEffect(startTimer, [isRunning]);


//開始
const handleStart = () => {
  setIsRunning(true);
};

//暫停
const handlePause = () => {
  setIsRunning(false);
};

//重啟
const handleRestart = () => {
  setIsRunning(false);
  setCount(0);
};


  return (
    <section>
      <p>
        2. 做出一個計時器, 要顯示兩位數的分跟秒 ( 1分06秒 = 01:06 ),
        要有一個開始 / 暫停按鈕 跟 一個重置按鈕。
      </p>
      <div className='clockpage'>
        <div className='clock'>
            <span>{secondsFormat}</span>
            <div className='btn'>
                <button onClick={handleStart}>start</button>
                <button onClick={handlePause}>pause</button>
                <button onClick={handleRestart}>reset</button>
            </div>
        </div>
        </div>
    </section>
  );
}
