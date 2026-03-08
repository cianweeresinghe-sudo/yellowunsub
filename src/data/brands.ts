export type AffiliateLink = {
  title: string;
  url: string;
  note?: string;
};

export type Brand = {
  name: string;
  slug: string;
  category: string;
  websiteUrl: string;

  summary: string;
  whyTheyEmail: string;

  // Official links (non-affiliate)
  preferenceCenterUrl?: string;
  privacyUrl?: string;
  supportUrl?: string;

  // Instructions
  stepsFastest: string[];
  stepsEmail: string[];
  stepsWebsite?: string[];

  // SEO/internal linking
  relatedSlugs?: string[];

  // Monetisation (Skimlinks can auto-monetise these)
  affiliateLinks?: AffiliateLink[];

  lastVerifiedAt?: string; // YYYY-MM-DD
};

export const brands: Brand[] = [
  {
    name: 'Secret Escapes',
    slug: 'secret-escapes',
    category: 'Travel deals',
    websiteUrl: 'https://www.secretescapes.com/',
    summary: 'A members-only travel deals site with near-daily newsletters of hotel and holiday offers.',
    whyTheyEmail:
      'You likely created an account, opted into marketing, or interacted with deal alerts (cart reminders, ending-soon emails, recommendations).',

    // TODO: fill these with the exact official URLs when we verify them.
    privacyUrl: 'https://www.secretescapes.com/privacy-policy',

    stepsFastest: [
      'Open a recent Secret Escapes email in Gmail.',
      'If Gmail shows an “Unsubscribe” button near the sender, use it.',
      'If not, scroll to the footer and use the unsubscribe link (sometimes you need “View entire message”).',
    ],

    stepsEmail: [
      'Open a Secret Escapes newsletter email.',
      'Scroll to the very bottom (footer).',
      'If the footer is clipped, click “View entire message”, then scroll again.',
      'Click “Unsubscribe”.',
      'In the preference centre, choose Unsubscribe and save changes.',
    ],

    stepsWebsite: [
      'Go to Secret Escapes and log in.',
      'Open your account/profile menu (usually top right).',
      'Find “Mail preferences” / “Email preferences”.',
      'Choose Unsubscribe and save changes.',
    ],

    affiliateLinks: [
      {
        title: 'Alternative: Booking.com (hotels)',
        url: 'https://www.booking.com/',
        note: 'Good for flexible hotel bookings without daily deal emails.',
      },
      {
        title: 'Alternative: Expedia (packages)',
        url: 'https://www.expedia.co.uk/',
        note: 'Useful for packages; set alerts without newsletter overload.',
      },
    ],

    lastVerifiedAt: '2026-03-08',
    relatedSlugs: [],
  },
];

export const categories = Array.from(new Set(brands.map((b) => b.category))).sort();

export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getBrandsByCategory(category: string): Brand[] {
  return brands.filter((b) => b.category === category);
}
