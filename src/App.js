import './App.css';

function App() {


  const selectCurrency = (e) => {
    console.log(e.target.outerText)
  }



  return (
    <div className="App flex justify-center">
      <div className="h-screen w-1/2 ">
      <div className="h-2/5 bg-dark text-white relative">
        <div className="absolute bottom-0 w-full px-10 h-3/4">
        <div className="flex justify-between items-center h-1/2">
          <button className="text-blue font-bold text-lg" onClick={(e) => selectCurrency(e)}>NGN</button>
          <p className="text-5xl">0</p>

        </div>
        
        <div className="flex justify-between items-center h-1/2">
        <button className="text-blue font-bold text-lg">USD</button>
        <p className="text-5xl">0</p>
        </div>
        </div>
      
        
      </div>
        <div className=" bg-darker h-3/5 text-white grid grid-cols-3">
          <button className="w-full h-full hover:bg-white hover:bg-opacity-5">9</button>
          <button className="w-full h-full hover:bg-white hover:bg-opacity-5">8</button>
          <button className="w-full h-full hover:bg-white hover:bg-opacity-5">7</button>
          <button className="w-full h-full hover:bg-white hover:bg-opacity-5">6</button>
          <button className="w-full h-full hover:bg-white hover:bg-opacity-5">5</button>
          <button className="w-full h-full hover:bg-white hover:bg-opacity-5">4</button>
          <button className="w-full h-full hover:bg-white hover:bg-opacity-5">3</button>
          <button className="w-full h-full hover:bg-white hover:bg-opacity-5">2</button>
          <button className="w-full h-full hover:bg-white hover:bg-opacity-5">1</button>
          <button className="w-full h-full hover:bg-white hover:bg-opacity-5">C</button>
          <button className="w-full h-full hover:bg-white hover:bg-opacity-5">0</button>
          <button className="w-full h-full hover:bg-white hover:bg-opacity-5">AC</button>
        </div>
      </div>

    </div>
  );
}

export default App;
