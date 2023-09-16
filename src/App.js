import "./App.css";

function App() {
  const audio1 = new Audio("/01 - Ahmed Santa.mp3");
  const audio2 = new Audio("/02 - Ahmed Santa.mp3");
  const audio3 = new Audio("/03 - Ahmed Santa.mp3");

  function pauseAllAudios() {
    audio1.currentTime = 0;
    audio1.pause();
    audio2.currentTime = 0;
    audio2.pause();
    audio3.currentTime = 0;
    audio3.pause();
  }
  const start1 = () => {
    pauseAllAudios();
    audio1.play();
  };
  const start2 = () => {
    pauseAllAudios();
    audio2.play();
  };
  const start3 = () => {
    pauseAllAudios();
    audio3.play();
  };

  return (
    <div className="main">
      <div className="row">
        <div className="col">
          <button className="button" onClick={start3}>
            <span>اجي اتكلم</span>
          </button>
        </div>
      </div>
      <div className="col">
        <button className="button" onClick={start2}>
          <span>فاكك الشعر</span>
        </button>
      </div>
      <div className="col">
        <button className="button" onClick={start1}>
          <span>رابط الشعر</span>
        </button>
      </div>
    </div>
  );
}

export default App;
