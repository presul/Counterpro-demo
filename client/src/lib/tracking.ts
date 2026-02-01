/**
 * Tracking utility for GA4, Facebook Pixel, and LinkedIn Insight Tag
 * Provides type-safe event tracking across all platforms
 */

export type TrackingEvent = 
  | 'form_submit'
  | 'button_click'
  | 'demo_interaction'
  | 'page_view';

export interface TrackingParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  revenue_tier?: string;
  demo_type?: string;
  scenario_name?: string;
  button_name?: string;
}

/**
 * Track event across all analytics platforms
 */
export function trackEvent(eventName: TrackingEvent, params?: TrackingParams) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    const fbEventMap: Record<TrackingEvent, string> = {
      form_submit: 'Lead',
      button_click: 'ViewContent',
      demo_interaction: 'ViewContent',
      page_view: 'PageView',
    };
    (window as any).fbq('track', fbEventMap[eventName], params);
  }

  // LinkedIn Insight Tag
  if (typeof window !== 'undefined' && (window as any).lintrk) {
    (window as any).lintrk('track', { conversion_id: eventName });
  }

  // Microsoft Clarity - automatic tracking, no custom events needed
  
  // Console log for debugging (remove in production if needed)
  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking]', eventName, params);
  }
}

/**
 * Track form submission with revenue data
 */
export function trackFormSubmission(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  revenue: string;
  smsConsent: boolean;
}) {
  trackEvent('form_submit', {
    event_category: 'Waitlist',
    event_label: 'Form Submission',
    revenue_tier: data.revenue,
    value: getRevenueValue(data.revenue),
  });
}

/**
 * Track button click
 */
export function trackButtonClick(buttonName: string) {
  trackEvent('button_click', {
    event_category: 'Engagement',
    event_label: buttonName,
    button_name: buttonName,
  });
}

/**
 * Track demo interaction
 */
export function trackDemoInteraction(demoType: 'phone' | 'sms', scenarioName?: string) {
  trackEvent('demo_interaction', {
    event_category: 'Demo',
    event_label: `${demoType} Demo`,
    demo_type: demoType,
    scenario_name: scenarioName,
  });
}

/**
 * Convert revenue tier to numeric value for tracking
 */
function getRevenueValue(revenueTier: string): number {
  const valueMap: Record<string, number> = {
    'Under $5 Million': 2500000,
    '$5 - $20 Million': 12500000,
    '$20 - $200 Million': 110000000,
    'Over $200 Million': 300000000,
  };
  return valueMap[revenueTier] || 0;
}
