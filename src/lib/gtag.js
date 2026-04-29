const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

let isInitialized = false;

function injectScript(id) {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
}

export function initGtag() {
  if (typeof window === 'undefined' || !measurementId || isInitialized) {
    return;
  }

  injectScript(measurementId);

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_path: window.location.pathname,
  });

  isInitialized = true;
}

export function trackEvent(eventName, params = {}) {
  if (!measurementId || typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, params);
}
