# Tracking Setup Guide

This website includes comprehensive tracking infrastructure for Google Analytics 4, Facebook Pixel, LinkedIn Insight Tag, and Microsoft Clarity. All tracking scripts are already implemented and ready to use - you just need to add your tracking IDs.

## Quick Start

All tracking IDs are managed through environment variables. To activate tracking:

1. Navigate to **Management UI → Settings → Secrets**
2. Add the following environment variables with your tracking IDs:

### Required Tracking IDs

#### Google Analytics 4
- **Variable Name:** `VITE_GA4_MEASUREMENT_ID`
- **Format:** `G-XXXXXXXXXX` (starts with "G-")
- **Where to find it:** Google Analytics → Admin → Data Streams → Select your stream → Measurement ID

#### Facebook Pixel
- **Variable Name:** `VITE_FB_PIXEL_ID`
- **Format:** 16-digit number (e.g., `1234567890123456`)
- **Where to find it:** Meta Events Manager → Data Sources → Your Pixel → Pixel ID

#### LinkedIn Insight Tag
- **Variable Name:** `VITE_LINKEDIN_PARTNER_ID`
- **Format:** 7-digit number (e.g., `1234567`)
- **Where to find it:** LinkedIn Campaign Manager → Account Assets → Insight Tag → Partner ID

#### Microsoft Clarity (Optional)
- **Variable Name:** `VITE_CLARITY_PROJECT_ID`
- **Format:** 10-character alphanumeric (e.g., `abc123xyz0`)
- **Where to find it:** Clarity Dashboard → Settings → Project ID

## What Gets Tracked

### Automatic Tracking
- **Page Views** - Every page load across all platforms
- **Session Duration** - How long users stay on your site
- **Bounce Rate** - Single-page sessions
- **Traffic Sources** - Where visitors come from (UTM parameters supported)

### Custom Event Tracking

#### Form Submissions
- Event: `form_submit`
- Tracked Data:
  - Revenue tier (Under $5M, $5-$20M, $20-$200M, Over $200M)
  - Numeric revenue value (for conversion tracking)
  - Form completion rate
  - SMS consent status

#### Button Clicks
- **Try Live Demo** - Tracks hero CTA clicks
- **Learn More** - Tracks Calendly link clicks
- **Join the Waitlist** - Tracks waitlist modal opens
- **AI Chat Icon** - Tracks chat interaction attempts

#### Demo Interactions
- **Phone Demo** - Tracks which scenarios users select:
  - "Successful Order - All In Stock"
  - "Limited Availability - Memphis Warehouse"
  - "Out of Stock - Offering Solutions"
- **SMS Demo** - Tracks which scenarios users select:
  - "Quick Inventory Check"
  - "Order Status Inquiry"
  - "Pricing Question"

## Platform-Specific Features

### Google Analytics 4
- Full funnel tracking from landing to form submission
- Revenue value tracking for conversion optimization
- Custom dimensions for revenue tier segmentation
- UTM parameter tracking for campaign attribution

### Facebook Pixel
- Standard events: PageView, Lead, ViewContent
- Custom conversions for retargeting campaigns
- Revenue value tracking for ROAS optimization
- Audience building for lookalike campaigns

### LinkedIn Insight Tag
- B2B audience tracking and insights
- Company demographics and job titles
- Conversion tracking for LinkedIn ads
- Retargeting capabilities for decision-makers

### Microsoft Clarity
- Session recordings (see exactly how users interact)
- Heatmaps (where users click, scroll, and spend time)
- Rage clicks and dead clicks detection
- Mobile vs desktop behavior analysis

## Testing Your Tracking

### Before Adding IDs
The tracking scripts check for valid IDs before loading. If IDs contain `%` (placeholder), they won't load. This prevents errors in development.

### After Adding IDs
1. **Open your website** in a new browser window
2. **Open Browser DevTools** (F12 or Right-click → Inspect)
3. **Go to Console tab**
4. **Look for tracking logs** - You should see `[Tracking]` messages when you interact with buttons/forms
5. **Check Network tab** - Look for requests to:
   - `google-analytics.com` (GA4)
   - `facebook.net` (Facebook Pixel)
   - `snap.licdn.com` (LinkedIn)
   - `clarity.ms` (Clarity)

### Verify in Platform Dashboards
- **GA4:** Real-time → Events (should see events within 30 seconds)
- **Facebook:** Events Manager → Test Events (use Facebook Pixel Helper extension)
- **LinkedIn:** Campaign Manager → Insight Tag → Verify Installation
- **Clarity:** Dashboard → Recordings (recordings appear within minutes)

## Privacy & Compliance

All tracking scripts:
- Load asynchronously (don't slow down your site)
- Only activate when valid IDs are provided
- Follow GDPR/CCPA best practices
- Don't collect PII without consent (SMS consent checkbox in form)

## Troubleshooting

### Tracking not working?
1. Check that environment variables are set correctly in Settings → Secrets
2. Verify ID formats match the examples above
3. Clear browser cache and reload the page
4. Check browser console for JavaScript errors
5. Ensure ad blockers are disabled when testing

### Events not showing in dashboards?
- GA4: Events can take 24-48 hours to appear in standard reports (use Real-time for immediate verification)
- Facebook: Check Events Manager → Test Events for immediate feedback
- LinkedIn: Conversion tracking requires at least 300 conversions for reporting
- Clarity: Recordings appear within 5-10 minutes

## Support

For tracking setup assistance:
- Google Analytics: [GA4 Help Center](https://support.google.com/analytics)
- Facebook Pixel: [Meta Business Help](https://www.facebook.com/business/help)
- LinkedIn: [LinkedIn Marketing Solutions](https://business.linkedin.com/marketing-solutions/insight-tag)
- Microsoft Clarity: [Clarity Documentation](https://clarity.microsoft.com/docs)
