/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
      {
        label: "Send your top closer to the biggest jobs",
        href: "/use-cases/send-top-closer",
        image: "/generated/image-a-home-services-dispatcher-in-a-cozy-off.webp",
        description:
          "Automatically flag and route high-ticket calls to technicians with the strongest close rates, so you boost sales and get the most out of every opportunity. No more leaving it to chance.",
        showInNav: true,
        showInFooter: true
      },
      {
        label: "Scale your team with fewer dispatchers",
        href: "/use-cases/scale-team",
        image: "/generated/image-in-a-bustling-office-environment-a-large.webp",
        description:
          "Autopilot mode lets a single dispatcher manage 20–25+ techs—focusing only on exceptions. Probook automatically handles routing, updates, and reschedules, so your dispatchers can confidently scale operations.",
        showInNav: true,
        showInFooter: true
      },
      {
        label: "Prevent late arrivals and failed calls",
        href: "/use-cases/prevent-failed-calls",
        image: "/generated/image-a-field-service-dispatcher-is-in-an-orga.webp",
        description:
          "Get proactive late alerts and reschedule suggestions before problems snowball. Protect your reputation, avoid missed jobs, and keep your customers coming back.",
        showInNav: true,
        showInFooter: true
      }
    ]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
