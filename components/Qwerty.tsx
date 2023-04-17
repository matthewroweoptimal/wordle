import { observer } from 'mobx-react-lite'
import { FaBackspace, FaArrowRight } from 'react-icons/fa'

export default observer(function Querty({store}: any) {
  const qwerty = ['qwertyuiop', 'asdfghjkl', 'EzxcvbnmB']

  const handleCharClick = (char: string) => {
    store.handleSoftKey(char)
  }

  return (
    <div>
      {qwerty.map((row, i) => (
        <div key={i*30} className="flex justify-center py-[0.5px] ">
          {row.split('').map((char) => {
            const bgColor = store.exactGuesses.includes(char)
              ? 'bg-green-600'
              : store.inexactGuesses.includes(char)
              ? 'bg-yellow-400'
              : store.allGuesses.includes(char)
              ? 'bg-gray-400'
              : 'bg-gray-200'
            return (
              <button
              onClick={(e) => handleCharClick(char)}
                key={i}
                className={`rounded-lg m-px flex text-black h-10 w-10 md:h-14 md:w-14 lg:h-14 lg:w-14 xl:h-14 xl:w-14 items-center justify-center uppercase ${bgColor}`}
              >
                {
                  char === "E"
                  ? (<FaArrowRight />)
                  : char === "B"
                  ? (<FaBackspace />)
                  : char
                }
                
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
})