import { observer } from 'mobx-react-lite'

export default observer(function Querty({store}: any) {
  const qwerty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
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
              <div
                key={i}
                className={`rounded-lg m-px flex text-black h-14 w-14 items-center justify-center uppercase ${bgColor}`}
              >
                {char}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
})