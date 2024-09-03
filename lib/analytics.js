import { ANALYTICS_EVENTS } from "../types/analyticsEvents";

export const trackEvent = (eventType, properties) => {
  if (!window) {
    return;
  }

  const event = {
    event_type: eventType,
    event_properties: properties,
  };

  window.amplitude.track(event);
};

export const trackPageView = (pageTitle) => {
  if (!window) {
    return;
  }

  const event = {
    event_type: ANALYTICS_EVENTS.PAGE_VIEW,
    event_properties: {
      "Page Title": pageTitle,
    },
  };

  window.amplitude.track(event);
};
