
import './App.css';
import Description from "./components/description/Description";
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import TodosPage from "./pages/todosPage/TodosPage";

function App() {
  return (
    <div className="App">
      <MainPage/>
        <AboutPage/>
        <TodosPage/>
    </div>
  );
}

export default App;
