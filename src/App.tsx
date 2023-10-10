import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Counter from "./Components/Counter";
import UserList from "./Components/UserList";
import RegistrationForm from "./Components/RegistrationForm";
import DataFetcher from "./Components/DataFetcher";

function App() {

  return (
    // Calling all components 
    <div className="App">
      <Counter />
      <hr />
      <UserList />
      <hr />
      <RegistrationForm />
      <hr />
      <DataFetcher />
    </div>
  );
}

export default App;
