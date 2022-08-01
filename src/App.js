import "./App.css";
import Background from "./components/page-content/background/Background";
import SearchPage from "./pages/SearchPage";
import video from './assets/video/background.mp4'

function App() {
  return (
    <>
      <Background source={video}/>
      <SearchPage/>
    </>
  );
}

export default App;
