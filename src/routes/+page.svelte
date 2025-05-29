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
			image: "/generated/image-an-older-male-hvac-technician-in-uniform.webp"
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
  subtitle="See how Probook solves real-world dispatching challenges"
  useCases={[
    {
      title: "Send your top closer to the biggest jobs",
      description:
        "Automatically flag and route high-ticket calls to technicians with the strongest close rates. Boost sales and get the most out of every opportunity—no more leaving it to chance.",
      image: "/generated/image-a-home-services-dispatcher-in-a-cozy-off.webp",
      link: {
        href: "/use-cases/send-top-closer",
        label: "Learn more"
      }
    },
    {
      title: "Scale your team with fewer dispatchers",
      description:
        "Autopilot mode lets a single dispatcher manage 20–25+ techs—focusing only on exceptions. Probook automatically handles routing, updates, and reschedules, so your dispatchers can confidently scale operations.",
      image: "/generated/image-in-a-bustling-office-environment-a-large.webp",
      link: {
        href: "/use-cases/scale-team",
        label: "Learn more"
      }
    },
    {
      title: "Prevent late arrivals and failed calls",
      description:
        "Get proactive late alerts and reschedule suggestions before problems snowball. Protect your reputation, avoid missed jobs, and keep your customers coming back.",
      image: "/generated/image-a-field-service-dispatcher-is-in-an-orga.webp",
      link: {
        href: "/use-cases/prevent-failed-calls",
        label: "Learn more"
      }
    }
  ]}
/>

<AboutTeaser />
<CallToAction
  title="See how easy dispatching can be"
  subtitle="Book a demo and let Probook handle the rest"
  description="Spend less time assigning jobs and more time growing your company. Probook makes it easy to boost sales, keep teams happy, and deliver the best experience for every customer."
  imageSrc="/generated/image-a-cheerful-field-technician-and-dispatch.webp"
  callsToAction={[
    { href: '/book-demo', label: 'Book your demo', variant: 'primary' },
    { href: '/customer-stories', label: 'See customer results', variant: 'secondary' }
  ]}
/>
