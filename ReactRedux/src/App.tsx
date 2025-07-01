import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
  const laptops = useSelector((store: { laptops: number }) => store.laptops);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <div className="card">
        <header className="header">
          <h1>Laptop Inventory</h1>
        </header>
        
        <div className="counter-section">
          <div className="counter-display">
            <span className="counter-label">Current Stock</span>
            <div className="counter-value">{laptops}</div>
          </div>
        </div>
        
        <div className="actions-section">
          <button className="btn btn-add" onClick={() => dispatch({type: "increment", payload: 10})}>
            <span className="btn-icon">+</span><span>Add 10 Laptops</span>
          </button>
          
          <button className="btn btn-remove" onClick={() => dispatch({type: "decrement", payload: 5})}>
            <span className="btn-icon">−</span><span>Remove 5 Laptops</span>
          </button>
          
          <button className="btn btn-reset" onClick={() => dispatch({type: "reset"})}>
            <span className="btn-icon">↺</span><span>Reset Count</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
