import { useDispatch, useSelector } from 'react-redux';
import { incrementLaptos, decrementLaptos, resetLaptos } from './store/slices/laptopSlice'
import { incrementMonitors, decrementMonitors, resetMonitors } from './store/slices/monitorSlice'
import './App.css'

function App() {
  const laptops = useSelector((state: { laptops: { laptops: number } }) => state.laptops.laptops);
  const monitors = useSelector((state: { monitors: { monitors: number } }) => state.monitors.monitors);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <div className="inventory-container">
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
            <button className="btn btn-add" onClick={() => dispatch(incrementLaptos(10))}>
              <span className="btn-icon">+</span>
              <span>Add 10 Laptops</span>
            </button>
            
            <button className="btn btn-remove" onClick={() => dispatch(decrementLaptos(5))}>
              <span className="btn-icon">−</span>
              <span>Remove 5 Laptops</span>
            </button>
            
            <button className="btn btn-reset" onClick={() => dispatch(resetLaptos())}>
              <span className="btn-icon">↺</span>
              <span>Reset Count</span>
            </button>
          </div>
        </div>
        
        <div className="card">
          <header className="header">
            <h1>Monitor Inventory</h1>
          </header>
          
          <div className="counter-section">
            <div className="counter-display">
              <span className="counter-label">Current Stock</span>
              <div className="counter-value">{monitors}</div>
            </div>
          </div>
          
          <div className="actions-section">
            <button className="btn btn-add" onClick={() => dispatch(incrementMonitors(5))}>
              <span className="btn-icon">+</span>
              <span>Add 5 Monitors</span>
            </button>
            
            <button className="btn btn-remove" onClick={() => dispatch(decrementMonitors(2))}>
              <span className="btn-icon">−</span>
              <span>Remove 2 Monitors</span>
            </button>
            
            <button className="btn btn-reset" onClick={() => dispatch(resetMonitors())}>
              <span className="btn-icon">↺</span>
              <span>Reset Count</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default App
