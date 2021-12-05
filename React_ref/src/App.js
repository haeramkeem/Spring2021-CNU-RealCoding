import './App.css';
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Cities from './pages/Cities';

function App() {
  const city = "Seoul";

  return (
    <Router>
      <div className="App">
        {/* 자바스크립트에서 모듈 imoprt하는 방법
            1. 모듈파일을 만들고 맨마지막에 export default 모듈이름;
            2. 불러올 코드에서 import 함수이름 from 경로
            3. 불러온 함수 html값에서 실행시에는 <함수이름 /> */}

        {/* import한 함수에 인자 전달하기
            1. 함수 호출할때 <함수이름 속성이름(맘대로정하셈)=값/>
            2. 모듈에서 함수에 props라는 매개변수 추가
            2. props.아까정해준필드이름 으로 넣어준 값 호출 */}

        {/* html값에서 자바스크립트 코드 사용하기
            - {}사용
            - {변수값}, {표현식} 등등 기출변형해주면 된다 */}
            
        <Header city={city} region="KR"/>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cities">Cities</Link>
          </li>
        </ul>

        {/* 이런 구조로 해주면 Link를 클릭하면 switch 태그 안의 route가 받아서 URL이 바뀌게 된다 */}
        <Switch>
          <Route path="/cities">
            <Cities />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
