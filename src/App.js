import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setView } from './reducers/viewSlice';
import Browse from './Browse';

function App() {
  // view = 1 : browse
  // view = 2 : checkout
  // view = 3 : confirmation
  const view = useSelector((state) => (state.view.value));
  const dispatch = useDispatch();
  
  return (
    view === 0 ? 
    <Browse/> : 
    view === 1 ? 
    <div className="App container">
      <div class="navbar">
        <button onClick={() => {dispatch(setView(0))}} type="button" class="btn btn-primary">Return</button>
      </div>
      
    </div> : 
    <>Confirmation Screen</>
  );
}

export default App;
