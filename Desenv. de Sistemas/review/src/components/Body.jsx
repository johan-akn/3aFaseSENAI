import './Body.css'
import Demo1 from './Demo1'
import Avisos from './Avisos'
import Demo2 from './Demo2'


function Body() {
  return (
    <div>
        <div className="body-container">
            <h2>corpo do site</h2>
            <div className="mid-body-container">
              <Demo1 />
              <Demo2 />
              <Avisos />
            </div>
        </div>
    </div>
  )
}

export default Body
