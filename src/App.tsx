import "./App.css";
import { FormEvent, useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import General from "./components/general/General";
import Stakeholder from "./components/stakeholder/Stakeholder";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

function App() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (field: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value
    }));
  };

  useEffect(() => {
    // Handle GTM event push based on cookie consent
    if (getCookieConsentValue() === "true") {
      console.log("cookieConsent");
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "consentUpdate",
        ad_storage: "granted",
        analytics_storage: "granted"
      });

      // Inform Clarity that consent has been granted
      window.clarity("consent");
    }
  }, []);

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

      {/* Cookie Consent Banner */}
      import CookieConsent from "react-cookie-consent";

      <CookieConsent
        location="bottom"
        buttonText="I understand"
        declineButtonText="Decline"
        enableDeclineButton
        onAccept={() => {
          // Grant consent to Clarity
          window.clarity("consent");

          // Inform GTM about consent granted for both ads and analytics storage
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "consentUpdate",
            ad_storage: "granted",
            analytics_storage: "granted"
          });
        }}
        onDecline={() => {
          // In case user declines, no cookies for Clarity or GTM
          console.log("Cookies declined");

          // Inform GTM that consent was denied
          window.dataLayer.push({
            event: "consentUpdate",
            ad_storage: "denied",
            analytics_storage: "denied"
          });
        }}
        style={{ background: "#003643", fontFamily: "Nunito Sans", color: "white" }}
        buttonStyle={{ backgroundColor: "#43cfb5", fontFamily: "Nunito Sans", color: "white" }}
        declineButtonStyle={{ backgroundColor: "#e8705e", fontFamily: "Nunito Sans" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
}

export default App;