import { Provider } from "react-redux";
import "./App.css";
import TodoList from "./component/todoMain";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </>
  );
}

export default App;
