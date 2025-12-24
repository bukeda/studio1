# **App Name**: junita Paytrack

## Core Features:

- Automated Billing Engine: Calculates termly fees based on learner categories and sibling hierarchies.
- Firebase Authentication and RBAC: Google Sign-In ensures secure access restricted to authorized personnel, Role-Based Access Control (RBAC) uses Firestore Security Rules to grant different permissions (ADMIN, MANAGER, CLERK, USER).
- Financial Data Visualization: Use Recharts to visualize financial health, including Monthly Cashflow Trends and Revenue Efficiency bars.
- Reporting Engine: Implement 'Save as Image' functionality for financial statements, complementing native Window Print PDF generation.
- KPI Calculator: The dashboard calculates sophisticated metrics including Term-over-Term Growth, Collection Velocity, Break-even Ratios, and Staff Cost Ratios.
- Billing Reminders: Use AI tool that will automatically send payment confirmation using data like 'student-specific-data', and will allow sending billing reminders to parents via WhatsApp API integration
- Payment Categorization: Automatic identification of overpayments on specific fee items with automatic allocation of excess funds to a general credit category.

## Style Guidelines:

- Primary color: Deep blue (#1A5276) for a professional and trustworthy feel.
- Background color: Light blue (#EBF5FB), a desaturated hue of the primary color.
- Accent color: Teal (#2E86AB), slightly different hue from primary, offers good contrast.
- Body and headline font: 'PT Sans', a humanist sans-serif for a modern and accessible feel.
- Lucide React: Use a consistent, lightweight vector icon set.
- Clean and responsive layout using Tailwind CSS.
- Subtle animations to enhance user experience during data loading and transitions.