import { useEffect, useState } from "react";
import "./CookieBanner.css";

const GOOGLE_ANALYTICS_ID = "G-89L0L1GCNH";
const COOKIE_CONSENT_KEY = "aclimate-cookie-consent";

if (typeof window !== "undefined" && typeof window.gtag !== "function") {
  window.gtag = function noopGtag() {};
}

const getStoredConsent = () => {
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY);

  if (consent === "accepted" || consent === "rejected") {
    return consent;
  }

  return null;
};

const disableAnalytics = () => {
  window[`ga-disable-${GOOGLE_ANALYTICS_ID}`] = true;
};

const enableAnalytics = () => {
  window[`ga-disable-${GOOGLE_ANALYTICS_ID}`] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  const analyticsScript = document.querySelector(
    `script[data-ga-id="${GOOGLE_ANALYTICS_ID}"]`,
  );

  if (!analyticsScript) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
    script.setAttribute("data-ga-id", GOOGLE_ANALYTICS_ID);
    document.head.appendChild(script);
  }

  if (!window.__aclimateAnalyticsConfigured) {
    window.gtag("js", new Date());
    window.gtag("config", GOOGLE_ANALYTICS_ID);
    window.__aclimateAnalyticsConfigured = true;
  }
};

function CookieBanner() {
  const [consent, setConsent] = useState(() => getStoredConsent());

  useEffect(() => {
    if (consent === "accepted") {
      enableAnalytics();
      return;
    }

    disableAnalytics();
  }, [consent]);

  const handleConsent = (value) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setConsent(value);
  };

  if (consent !== null) {
    return null;
  }

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
    >
      <p className="cookie-banner__text">
        Usamos cookies analiticas para entender como se usa AClimate y mejorar
        la plataforma. Puedes aceptar o rechazar su uso.
      </p>
      <div className="cookie-banner__actions">
        <button
          type="button"
          className="cookie-banner__button cookie-banner__button--secondary"
          onClick={() => handleConsent("rejected")}
        >
          Rechazar
        </button>
        <button
          type="button"
          className="cookie-banner__button cookie-banner__button--primary"
          onClick={() => handleConsent("accepted")}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
