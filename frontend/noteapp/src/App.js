import {Route, Routes} from "react-router-dom";

import './App.css';
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

function App() {
    return (
        <div className="container dark">
            <div className="app">
                <Header/>
                <Routes>
                    <Route path="/" exact element={<NotesListPage/>}/>
                    <Route path="/notes/:noteId" element={<NotePage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
