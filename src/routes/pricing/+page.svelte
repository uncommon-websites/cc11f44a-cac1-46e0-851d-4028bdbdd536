<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
	testimonials={[
  {
    name: "Hector Morales",
    position: "Dispatch Manager",
    company: "CoolTemp HVAC",
    quote:
      "With Probook, we increased revenue by 15% in the first 3 months. Dispatching is faster and far less stressful.",
    image: "/generated/image-a-hispanic-male-hvac-dispatcher-in-his-3.webp"
  },
  {
    name: "Trina Jefferson",
    position: "Operations Manager",
    company: "PrimeFlow Plumbing",
    quote:
      "The return on investment was obvious within weeks. My team can manage twice as many techs without missing a beat.",
    image: "/generated/image-a-black-female-operations-manager-for-a-.webp"
  },
  {
    name: "Nathan Reilly",
    position: "Lead Electrician",
    company: "BrightWorks Electrical",
    quote:
      "We went from juggling jobs to running a streamlined ship. Probook paid for itself in no time.",
    image: "/generated/image-a-white-male-electrical-company-technici.webp"
  },
  {
    name: "Mei Chen",
    position: "Service Dispatcher",
    company: "Evergreen Home Services",
    quote:
      "Even our new dispatchers picked it up in hours. It’s straightforward and support is top notch.",
    image: "/generated/image-an-east-asian-female-home-services-dispa.webp"
  }
]}
/>

<CallToAction 
  title="Smarter dispatching. Real results."
  subtitle="Goodbye guesswork. Hello performance."
  description="Probook is AI-powered dispatching built by dispatchers, for dispatchers. Increase sales, improve tech-to-dispatcher ratio, and get the right tech to every job—no spreadsheets, scheduling chaos, or gut calls required. See how much you could grow with Probook: book a demo for a personalized ROI estimate."
  imageSrc="/generated/image-a-cheerful-home-services-dispatcher-stan.webp"
  callsToAction={[
    { href: '/demo', label: 'Book a demo', variant: 'primary' }
  ]}
/>

