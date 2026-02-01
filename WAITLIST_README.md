# Waitlist Submissions

This file tracks all waitlist form submissions from the CounterPro.ai website.

## Data Collection

When a user submits the waitlist form, the following information is collected:

- **Name** (required)
- **Company Name** (optional)
- **Website** (optional)
- **Email** (required)
- **Phone** (required)
- **SMS Consent** (boolean)
- **Timestamp** (ISO 8601 format)

## Email Notification

Each submission triggers an email to: **jm@digitalvisor.com**

The email includes all form data and is sent via the user's default email client (mailto: link).

## Data Storage

Submissions are stored in two locations:

1. **Browser localStorage** - Immediate backup on the client side
2. **waitlist-submissions.json** - File tracked in the GitHub repository (requires manual export from localStorage or backend integration)

## Future Enhancement

For production deployment, consider implementing:
- Backend API endpoint to save submissions directly to the JSON file
- Automated email sending via SendGrid, AWS SES, or similar service
- Database integration for better data management
- CSV export functionality for easy analysis

## Privacy & Compliance

- Users must explicitly consent to SMS communications via checkbox
- All data is transmitted securely
- Consider adding GDPR/CCPA compliance notices if targeting EU/CA markets
