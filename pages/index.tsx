import { observer, useLocalObservable } from "mobx-react-lite";
import Guess from "@/components/Guess";
import Qwerty from "@/components/Qwerty";
import PuzzleStore from "@/stores/PuzzleStore";
import { useEffect } from "react";

export default observer(function Home() {
  const store = useLocalObservable(() => PuzzleStore);
  useEffect(() => {
    store.init();
    window.addEventListener("keyup", store.handleKeyup);
    return () => {
      window.removeEventListener("keyup", store.handleKeyup);
    };
  }, []);
  return (
    <div className="flex flex-col h-screen w-screen text-center items-center justify-around min-w-fit min-h-fit">
      <div className="">
        <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600 text-center md:tracking-[6px] tracking-[10px]">
          Wordle
        </h1>
      </div>
      <div className="">
        {store.guesses?.map((_, i) => (
          <Guess
            key={i + 10}
            word={store.word}
            guess={store.guesses[i]}
            isGuessed={i < store.currentGuess}
          />
        ))}
      </div>
      {
        (store.won || store.lost) ?
        (<div className="">
        {store.won && <h1>You won!</h1>}
        {store.lost && !store.won && <h1>You lost!</h1>}
        {store.lost && !store.won && (
          <h1>Correct Answer: {store.word}</h1>
          )}
        {(store.won || store.lost) && (
          <button className="mt-4 md:mt-8 bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800" onClick={store.init}>
            Play Again
          </button>
        )}
      </div>)
      : <></>
      }
      <div className="">
        <Qwerty store={store} />
      </div>
      {/* <div className="">
      word: {store.word}
      guesses: {JSON.stringify(store.guesses)}
      </div> */}
      <div className="text-xs font-semibold mt-4">
        Designed & Developed By{" "}
        <span className="text-transform underline">
          <a href="https://rutvijsathe.dev">Rutvij Sathe</a>
        </span>
      </div>
    </div>
  );
});
