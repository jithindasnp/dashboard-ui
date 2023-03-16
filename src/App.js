import './App.css';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {
  AOS.init()
  return (
    <>

      <div className="container-fluid">
        <div className="row rootRow">
          <div className="col-xl-3 col-12 px-0 sideBarCol">
            <Sidebar />
          </div>
          <div className="col-xl-9 col-sm-12 px-0">
            <Main />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
