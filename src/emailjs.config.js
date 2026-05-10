/*
  ══════════════════════════════════════════════════════
  EMAILJS CONFIGURATION
  ══════════════════════════════════════════════════════

  SETUP STEPS:
  1. Go to https://www.emailjs.com and create a free account
  2. Click "Add New Service" → choose Gmail → connect your Gmail account
     → copy the Service ID below

  3. Click "Email Templates" → "Create New Template"
     In the template body, use these variables:
       From:    {{from_name}} <{{from_email}}>
       Message: {{message}}
     Set "To Email" to: guruvishnu7@gmail.com
     → Save → copy the Template ID below

  4. Go to Account → API Keys → copy your Public Key below

  5. Free plan includes 200 emails/month — plenty for a portfolio!
  ══════════════════════════════════════════════════════
*/

export const EMAILJS_CONFIG = {
  SERVICE_ID:  "service_4yun3ms",   // e.g. "service_abc1234"
  TEMPLATE_ID: "template_vuri6po",  // e.g. "template_xyz5678"
  PUBLIC_KEY:  "O_LTnilj-mQ9odlzZ",   // e.g. "aBcDeFgHiJkLmNoP"
}
