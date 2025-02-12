import { useState } from 'react';
import './Dice.css'


const emojiList = [   
    "👑", "🏰", "🐉", "⚔️", "🛡️", "🧙‍♂️", "🧝‍♀️", "🧟‍♂️", "🧛‍♂️", "🧚‍♀️",
   "🦄", "🐺", "🦅", "🦉", "🦇", "🐍", "🐢", "🐲", "🌟", "🔥", "💧", "🌪️",
   "🌈", "🌙", "☀️", "🌍", "🌌", "🌠", "⚡", "💀", "👻", "🎃", "🕸️", "🕷️",
   "🦠", "🧬", "🧪", "🧫", "🧲", "⚙️", "🔮", "📜", "📖", "🗡️", "🏹", "🪓",
   "🔨", "🛠️", "⛏️", "🪚", "🗿", "🏺", "🛡️", "🧵", "🧶", "🪡", "🪢", "🧩",
   "🎲", "🃏", "🎴", "🎭", "🎨", "🎤", "🎧", "🎼", "🎹", "🎷", "🎺", "🎸",
   "🎻", "🥁", "📯", "🎬", "🎥", "📽️", "📺", "📻", "📡", "📞", "☎️", "📟",
   "📠", "📱", "💻", "🖥️", "🖨️", "🖱️", "🖲️", "🕹️", "🗜️", "💽", "💾", "💿",
   "📀", "🧮", "🎥", "📷", "📸", "📹", "📼", "🔍", "🔎", "🔬", "🔭", "📡"]

function Dice() {
        const [selectedEmoji, setSelectedEmoji] = useState('')
        const [history, setHistory] = useState([])

        function RollDice() {
            const randomIndex = Math.floor(Math.random() * emojiList.length)
            
            if(history.length > 9) {
                setHistory([...history.slice(1)])
            }
            else{

                setSelectedEmoji(emojiList[randomIndex])
                setHistory([...history, emojiList[randomIndex]])
                emojiList.splice(randomIndex, 1)
                console.log(history.length)
            }
        }

 return (
   
    
    <div>
        <div className="dice-container">
                <h1>DiceTales</h1>

                    <p onClick={RollDice} className='rollButton'>
                        {selectedEmoji ? selectedEmoji : '🎲'}
                    </p>
                
                    <h2>History:</h2>
                    <div className='diceHistory'>
                        {history && history}
                        
                    </div>
        </div>
    </div>
  )
}


export default Dice
