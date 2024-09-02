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
        <nav className="flex justify-center">
          <NavBar />
        </nav>
        <main className="flex min-h-screen w-full flex-col items-center justify-start bg-white pt-10 text-slate-900">
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
      </Router>
    </>
  );
}

export default App;
