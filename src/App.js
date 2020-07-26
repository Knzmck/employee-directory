import React from "react";
import DirectoryContainer from "./pages/DirectoryContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
    <Router>
        <div>
            <Route exact path="/" component={DirectoryContainer} />
        </div>
    </Router> 
    )
}
// const App = () => <DirectoryContainer exact path="/" />;

export default App;
