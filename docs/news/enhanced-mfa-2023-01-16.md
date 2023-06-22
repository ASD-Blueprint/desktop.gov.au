---
hide:
 - navigation
 - toc
date: 2023-01-16
---

# Enhanced MFA

16 January 2023

When Microsoft released an “enhanced” MFA capability, we were cautiously optimistic. With MFA prompt fatigue becoming a wider attack vector as time goes on, and everyone’s number of accounts increases. The enhanced MFA capability offers a location map and a numbered verification prompt to any sign-in prompt through MS Authenticator. So your users can verify that it was their sign-in (or not) that triggered the MFA. We tested it at oobe and we’re broadly happy with the results. The location is not always spot on, but you at least get a red flag if it looks like you’re trying to sign in from overseas.

You’ll find the updated guidance in the Azure AD MFA section.