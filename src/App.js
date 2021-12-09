import {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import Home from './Home';
import ComponentA from './components/compA/ComponentA';
import ComponentB from './components/compB/ComponentB';

function App() {

  const linkStyle = {
    display: "inline-block",
    margin: "1rem",
    padding: ".5rem 0",
    backgroundColor: "#292F33",
    color: "#55ACEE",
    fontWeight: "bold",
    borderRadius: "5px",
    textDecoration: "none",
    textTransform: "uppercase",
    width: "7.75rem"
  };

  const [formField, setFormField] = useState({
    userName: "",
    password: "",
  });

  const [path, setPath] = useState("/");
  const [btnLabel, setBtnLabel] = useState("Sign In");

  const handleChange = (e) => {
    setFormField(previousState => {
      return {
        ...previousState,
        [e.target.name]: e.target.value
      }
    });
  }

  const resetFields = () => {
    if (btnLabel === "Sign In") {
      setBtnLabel("Back");
    }
    else {
      setFormField({
        userName: "",
        password: "",
      });
      setPath("/");
      setBtnLabel("Sign In");
    }    
  }

  useEffect(() => {
    const userAccounts = [
      {
        userName: "guinness",
        password: "guinness"
      },
      {
        userName: "jake",
        password: "jake"
      },
      {
        userName: "bailey",
        password: "bailey"
      },
      {
        userName: "marc",
        password: "marc"
      }
    ];
    let newPath;
    if (btnLabel === "Sign In") {
      newPath = userAccounts.findIndex((e) => e.userName === formField.userName && e.password === formField.password) > -1 ? "/compA" : "/compB";
    }
    else {
      newPath = "/";
    }
    setPath(() => newPath);
    }, [formField, btnLabel]
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home handleChange={handleChange} />} exact />
          <Route path='/compA' element={<ComponentA userName={formField.userName}/>} />
          <Route path='/compB' element={<ComponentB />} />
        </Routes>
        <div className="linkDiv" style={{textAlign: "center"}}>
          <Link style={linkStyle} onClick={resetFields} to={path}>{btnLabel}</Link>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
