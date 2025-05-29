<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
		{
			title: "Innovation",
			description: "Constantly challenging the status quo to create better solutions."
		},
		{
			title: "Integrity",
			description: "Building trust through transparent actions and honest communication."
		},
		{
			title: "Impact",
			description: "Measuring our success by the positive change we create for our clients."
		}
	];
</script>

<SecondaryHero
	title="AI-powered dispatching, from real dispatchers"
	subtitle="Built by people who’ve done the job. We stand beside your team—with hands-on support, not just software."
	imageSrc="/mockups/airport-screen-1748547408784.png"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"Before Probook, we were on the dispatch board ourselves—juggling calls, spreadsheets, and gut-feel decisions that were far from scalable. Day after day, we watched opportunities fall through the cracks and teams stretched too thin. We weren’t alone. Nearly every home services company we connected with had the same struggle: great people, poor tools, and no clear way to reliably send the right tech to the right call.",
		"So we built something better. With firsthand experience guiding us, we created Probook—dispatching software designed to support the real work of running a field team. It’s grounded in practical workflows, synced in real time with ServiceTitan, and offers two levels of automation that support—even strengthen—human decision-making. Most importantly, we didn’t just ship software; we showed up, sat next to real dispatchers, and built around what they actually needed.",
		"Now Probook powers top dispatch teams across the country—from companies managing 25+ techs per dispatcher, to startups ready to grow with confidence. Customers see 12% more revenue, a 19% increase in flipped calls, and their dispatchers finally have tools they trust. We're here for the long haul—with hands-on support from day one and 24/7 availability that feels like a true partnership. Because we don't just believe in smarter dispatching—we believe in the people behind it."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
  stakeholderType="team"
  title="Our team."
  subtitle="Founder & CEO George Eliadis leads Probook hands-on with every new customer. If you're launching with us, he'll be there—on-site, answering questions, and supporting dispatchers directly. Probook is built by someone who’s done the work. That’s why we prioritize dispatcher trust, day-one care, and features that actually make life easier. We’re here to help you grow—without babysitting your board."
  stakeholders={[
    {
      name: "George Eliadis",
      position: "Founder & CEO",
      bio: "George supports every Probook launch personally, guiding teams through onboarding and beyond.",
      image: "/generated/image-a-confident-business-founder-captured-in.webp"
    }
  ]}
/>





<!-- CTA Section -->
<CallToAction
  title="Run your board with confidence"
  subtitle="Start with a personalized demo"
  description="See how Probook can increase revenue, simplify dispatching, and support your team in real time. Get a custom ROI estimate—no strings attached."
  callsToAction={[
    {
      href: 'https://calendly.com/george-eliadis/demo',
      label: 'Book a demo',
      variant: 'primary',
    },
    {
      href: '/customer-stories',
      label: 'See customer results',
      variant: 'secondary',
    }
  ]}
  imageSrc="/uploaded/dispatcher-smiling-portrait.jpg"
/>
d achieve their business goals."
/>
