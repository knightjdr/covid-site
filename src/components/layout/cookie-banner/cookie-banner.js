import CookieConsent, { Cookies } from 'react-cookie-consent';
import React from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import './cookie-banner.css';

const loadGA = () => {
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
    ReactGA.initialize(
      process.env.GATSBY_TRACKING_ID,
      {
        gaOptions: {
          anonymizeIp: true,
        },
      },
    );
    ReactGA.pageview(window.location.pathname + window.location.search);

    const history = createBrowserHistory();
    history.listen((location) => {
      ReactGA.pageview(location.pathname + location.search);
    });
  }
};

if (Cookies.get('covid-google-analytics') && Cookies.get('covid-google-analytics') === 'true') {
  loadGA();
}

const CookieBanner = () => (
  <CookieConsent
    acceptOnScroll
    acceptOnScrollPercentage={10}
    buttonClasses="cookie-banner__button_accept"
    buttonText="Okay"
    containerClasses="cookie-banner__container"
    contentClasses="cookie-banner__content"
    cookieName="covid-google-analytics"
    declineButtonClasses="cookie-banner__button_decline"
    declineButtonText="Opt out"
    disableStyles
    enableDeclineButton
    flipButtons
    onAccept={loadGA}
    sameSite="strict"
  >
    This website uses cookies from Google Analytics to collect usage numbers for
    grant reporting purposes.
  </CookieConsent>
);

export default CookieBanner;
