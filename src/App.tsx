import './App.css';
import { FormEvent, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar.tsx';
import General from './components/general/General.tsx';
import Stakeholder from './components/stakeholder/Stakeholder.tsx';

function App() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (field: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return (
    <>
      <Router>
        <div className="flex h-screen flex-col">
          <nav className="flex-shrink-0">
            <NavBar />
          </nav>
          <main className="flex flex-grow items-center justify-center bg-white text-slate-900">
            <Routes>
              <Route
                path="/"
                element={
                  <General
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    formValues={formValues}
                  />
                }
              />
              <Route
                path="/stakeholder"
                element={
                  <Stakeholder
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    formValues={formValues}
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
