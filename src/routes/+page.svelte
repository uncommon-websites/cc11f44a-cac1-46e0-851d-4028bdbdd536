<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
</script>

<CustomerCardHero
  centered={true}
  title="Send the right tech, every time"
  subtitle="Probook helps home service companies dispatch faster, sell more, and keep customers happy—without the chaos."
  customers={[
    {
      name: "Dani Dascher",
      position: "Dispatcher at Auchinachie Services",
      imageSrc: "/generated/image-a-female-dispatcher-in-a-contemporary-of.webp"
    },
    {
      name: "Chris Holleran",
      position: "General Manager at Auchinachie Services",
      imageSrc: "/generated/image-a-male-plumbing-manager-dressed-in-a-blu.webp"
    },
    {
      name: "Alyssa Porta",
      position: "Operations Director at Lion Home Service",
      imageSrc: "/generated/image-a-female-operations-director-sitting-con.webp"
    },
    {
      name: "Mike Sullivan",
      position: "Lead Dispatcher at Auchinachie Services",
      imageSrc: "/generated/image-a-male-senior-dispatcher-with-a-headset-.webp"
    },
    {
      name: "Krystin Hines",
      position: "Dispatcher at Lion Home Service",
      imageSrc: "/generated/image-a-female-lead-dispatcher-working-at-her-.webp"
    }
  ]}
  callsToAction={[{ href: '/book-demo', label: 'Book a demo' }]}
/>

<LogoScroller
	label="Trusted by industry leaders"
	logoUrls={[
		'https://logo.clearbit.com/ars.com',
		'https://logo.clearbit.com/ars247.com',
		'https://logo.clearbit.com/mrrooter.com',
		'https://logo.clearbit.com/rescueairtx.com'
	]}
/>

<Summary
	title="What we do"
	text="Probook uses AI to dispatch the best technician for every job, making assignments faster, smarter, and more profitable. Home service companies grow sales, improve efficiency, and deliver a better customer experience—no guesswork required."
/>

<Testimonials
	testimonials={[
		{
			name: "Megan Ruiz",
			position: "Lead dispatcher, Eco Plumbers",
			quote: "Probook gave me two hours back every day. Now I train my team during shift instead of sorting out last-minute chaos.",
			image: "/generated/image-a-female-dispatcher-in-a-modern-home-ser.webp"
		},
		{
			name: "Calvin Harris",
			position: "HVAC technician, Lion Home Service",
			quote: "I no longer worry about missed jobs or overlap. The board updates live, so every route is set without mistakes.",
			image: "/generated/image-a-male-hvac-technician-in-uniform-standi.webp"
		},
		{
			name: "Leah Nguyen",
			position: "Operations manager, Butler Plumbing",
			quote: "We grew profits 13% this quarter—dispatch is faster, and we waste fewer calls sitting in traffic or rerouting. That’s real money saved.",
			image: "/generated/image-a-female-operations-manager-of-a-plumbin.webp"
		}
	]}
/>
/>

<Features
  title="What makes Probook different"
  subtitle="AI dispatching, built for home service teams"
  features={[
    {
      title: "AI-powered dispatching",
      description: "Send the right tech to the right call—automatically or with instant recommendations."
    },
    {
      title: "Real-time ServiceTitan integration",
      description: "Manage your dispatch board and sync every change, no spreadsheets or double entry."
    },
    {
      title: "Unmatched visibility",
      description: "See technician performance, sales by job, and live call board forecasts—all in one place."
    },
    {
      title: "Proven sales lift",
      description: "Customers see an average 12% sales increase and 19% flip rate boost after launch."
    },
    {
      title: "In-person support & onboarding",
      description: "2-day onsite launch with our CEO and ongoing 24/7 support whenever you need help."
    },
    {
      title: "Proactive alerts",
      description: "Get early warnings for late calls and instant recommendations for easy rescheduling."
    }
  ]}
/>

<UseCases
  title="Use cases"
  subtitle="See how Probook helps real service businesses run better"
  useCases={[
    {
      title: "Send the top closer to high-value calls",
      description:
        "Probook helps your dispatchers assign revenue-driving jobs to your best sellers—without guesswork.",
      image: "/generated/image-a-field-service-dispatch-team-deeply-eng.webp",
      link: {
        href: "/use-cases/top-closer-high-value",
        label: "Learn more"
      }
    },
    {
      title: "Manage 20–25 techs with a single dispatcher",
      description:
        "Autopilot handles the entire scheduling board, so one dispatcher can confidently run a large, efficient team.",
      image: "/generated/image-a-confident-home-services-technician-war.webp",
      link: {
        href: "/use-cases/manage-many-techs",
        label: "Learn more"
      }
    },
    {
      title: "Catch delays and avoid failed calls",
      description:
        "Get ahead of problems with automated late alerts and reschedule flags before a customer ever calls.",
      image: "/generated/image-a-home-services-dispatcher-attentively-o.webp",
      link: {
        href: "/use-cases/catch-delays",
        label: "Learn more"
      }
    }
  ]}
/>

<AboutTeaser generating />
<CallToAction generating />
