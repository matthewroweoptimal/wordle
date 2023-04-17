export default function Guess({ isGuessed, guess, word }) {
    return (
      <div className="mb-2 grid grid-cols-5 gap-2">
        {new Array(5).fill(0).map((_, i) => {
          const bgColor = !isGuessed
            ? 'bg-black'
            : guess[i] === word[i]
            ? 'bg-green-600'
            : word.includes(guess[i])
            ? 'bg-yellow-400'
            : 'bg-black'
  
          return (
            <div
              className={`flex h-14 w-14 md:h-16 md:w-16 lg:h-16 lg:w-16 xl:h-20 xl:w-20 items-center justify-center border border-gray-400 font-bold uppercase text-2xl text-white ${bgColor}`}
                key={i+20}
            >
              {guess[i]}
            </div>
          )
        })}
      </div>
    )
  }