import './App.css';
import {SideMenu} from "./components/layout/sidebar/SideMenu";
import {PageContent} from "./components/PageContent";
import {HeaderPage} from "./components/layout/header/HeaderPage";
import {FooterPage} from "./components/layout/footer/FooterPage";



function App() {

    return (
        <div>
            <HeaderPage/>
            <div style={{display: "flex", flexDirection: "row", height: "calc(100vh - 112px)"}}>
                <SideMenu/>
                <PageContent/>
            </div>
            <FooterPage/>
        </div>
    );
}

export default App;
