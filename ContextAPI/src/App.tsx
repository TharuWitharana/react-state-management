import { useLaptopContext, LaptopProvider } from './context/LaptopContext'
import './App.css'

// Component that uses the context
function LaptopInventory() {
  const { state, dispatch } = useLaptopContext();

  return (
    <div className="app-container">
      <div className="card">
        <header className="header">
          <h1>Laptop Inventory</h1>
        </header>
        
        <div className="counter-section">
          <div className="counter-display">
            <span className="counter-label">Current Stock</span>
            <div className="counter-value">{state.laptops}</div>
          </div>
        </div>
        
        <div className="actions-section">
          <button 
            className="btn btn-add" 
            onClick={() => dispatch({type: "increment", payload: 10})}
          >
            <span className="btn-icon">+</span>
            <span>Add 10 Laptops</span>
          </button>
          
          <button 
            className="btn btn-remove" 
            onClick={() => dispatch({type: "decrement", payload: 1})}
          >
            <span className="btn-icon">−</span>
            <span>Remove a Laptop</span>
          </button>
          
          <button 
            className="btn btn-reset" 
            onClick={() => dispatch({type: "reset"})}
          >
            <span className="btn-icon">↺</span>
            <span>Reset Count</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Main App component that provides the context
function App() {
  return (
    <LaptopProvider>
      <LaptopInventory />
    </LaptopProvider>
  );
}

export default App
