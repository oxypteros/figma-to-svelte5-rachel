<script lang="ts">
  import SEO from "$lib/components/SEO.svelte";
  import Header from "$lib/components/Header.svelte";
  import Cover from "$lib/components/Cover.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Stats from "$lib/components/sections/Stats.svelte";
  import Testimonials from "$lib/components/sections/Testimonials.svelte";
  import Introduction from "$lib/components/sections/Introduction.svelte";
  import Services from "$lib/components/sections/Services.svelte";
  import HowTo from "$lib/components/sections/HowTo.svelte";
  import Programs from "$lib/components/sections/Programs.svelte";
  import Results from "$lib/components/sections/Results.svelte";
  import FAQ from "$lib/components/sections/FAQ.svelte";
  import Contact from "$lib/components/sections/Contact.svelte";
  import Footer from '$lib/components/Footer.svelte';
</script>

<SEO
  title="Rachel Stone | Svelte 5 Demo by Oxypteros"
  repoUrl="https://github.com/oxypteros/figma-to-svelte5-rachel"
/>
<div class="relative min-h-[200vh]">
  <Header />
  <main class="bg-wh-100 dark:bg-bl-90 relative z-20">
    <Cover />
    <div class="bg-wh-100 dark:bg-bl-90 z-30 relative">
      <Hero />
      <Stats coached="250+" rate="98%" average="5" progress="3x" />
      <Testimonials />
      <Introduction />
      <Services />
      <HowTo />
      <Programs />
      <Results />
      <FAQ />
      <Contact />
    </div>
  </main>
  <Footer />
</div>
