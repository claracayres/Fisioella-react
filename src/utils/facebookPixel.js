import ReactPixel from "react-facebook-pixel";

const options = {
  autoConfig: true,
  debug: false,
};

export const initFacebookPixel = () => {
  ReactPixel.init("1808468869757208", {}, options);
  ReactPixel.pageView();
};

// eventos personalizados
export const trackEvent = (eventName, data = {}) => {
  ReactPixel.track(eventName, data);
};

// Eventos específicos para o site da Fisioella
export const trackPageView = (pageName) => {
  ReactPixel.track("ViewContent", {
    content_name: pageName,
    content_category: "Page View",
    content_type: "website_page",
  });
};

export const trackTreatmentView = (treatmentName) => {
  ReactPixel.track("ViewContent", {
    content_name: treatmentName,
    content_category: "Treatment",
    content_type: "service",
    currency: "BRL",
  });
};

export const trackContactInterest = () => {
  ReactPixel.track("InitiateCheckout", {
    content_name: "Contact Form Started",
    content_category: "Lead Generation",
    value: 100,
    currency: "BRL",
  });
};

export const trackFormSubmit = () => {
  ReactPixel.track("Lead", {
    content_name: "Contact Form Submitted",
    content_category: "Lead Generation",
    value: 200,
    currency: "BRL",
    status: "completed",
  });
};

export const trackWhatsAppClick = () => {
  ReactPixel.track("Contact", {
    content_name: "WhatsApp Click",
    content_category: "Communication",
    method: "whatsapp",
  });
};

export const trackTreatmentClick = (treatmentName) => {
  ReactPixel.track("ViewContent", {
    content_name: `${treatmentName} - Saiba Mais`,
    content_category: "Treatment Interest",
    content_type: "service_detail",
  });
};

export const trackScheduleIntent = () => {
  ReactPixel.track("Schedule", {
    content_name: "Schedule Appointment Intent",
    content_category: "Conversion Intent",
    value: 300,
    currency: "BRL",
  });
};
