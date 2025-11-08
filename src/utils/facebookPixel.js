import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true,
  debug: false,
};

export const initFacebookPixel = () => {
  ReactPixel.init('1808468869757208', {}, options);
  ReactPixel.pageView();
};

// eventos personalizados
export const trackEvent = (eventName, data = {}) => {
  ReactPixel.track(eventName, data);
};
