import { RouterProvider } from "react-router-dom";
import { routers } from "./routers";
import { Provider } from "react-redux";
import store from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={routers} />
      </div>
    </Provider>
  );
}

export default App;
