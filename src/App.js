import { expenses } from "./assets/expenses";
import Expenses from "./components/expenses/Expenses";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
