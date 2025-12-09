<script lang="ts">
  let {
    title = "Rachel Stone Demo",
    metaDesc = "Demo project: a Figma-to-Svelte 5 conversion, featuring responsive UI, accessibility best practices, and high-performance implementation. Not a real business.",
    OGdesc = "A fictional personal trainer site converted from a Figma template into a perfomant, accessible Svelte 5 application.",
    schemaDesc = "Demo project: a Figma-to-Svelte 5 conversion, featuring responsive UI, accessibility best practices, and high performance.",
    developerName = "Oxypteros",
    repoUrl = "https://github.com/oxypteros/figma-to-svelte5-rachel",
    image = "https://rachel-demo.oxypteros.com/seo-image.jpg"
  } = $props();

  const portfolioUrl = "https://oxypteros.com";
  const demoUrl = "https://rachel-demo.oxypteros.com";

  // Schema Logic
  let schema = $derived({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${portfolioUrl}/#identity`,
        name: developerName,
        url: portfolioUrl,
        jobTitle: "Frontend Developer"
      },
      {
        "@type": "WebSite",
        "@id": `${demoUrl}/#website`,
        url: demoUrl,
        name: title,
        description: schemaDesc,
        publisher: { "@id": `${portfolioUrl}/#identity` }
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": `${demoUrl}/#project`,
        isPartOf: { "@id": `${demoUrl}/#website` },
        name: "Figma to Svelte Portfolio Project",
        description: "Technical demo converted from Figma to Svelte 5. Not a real business.",
        genre: "Portfolio Demo",
        creator: { "@id": `${portfolioUrl}/#identity` },
        codeRepository: repoUrl,
        programmingLanguage: "Svelte",
        inLanguage: "en"
      }
    ]
  });

  // Use ('<' + '/script>') to prevent the "Unnecessary escape character" error
  let jsonLd = $derived(
    `<script type="application/ld+json">${JSON.stringify(schema)}` + "<" + "/script>"
  );
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={metaDesc} />

  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={OGdesc} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={demoUrl} />
  <meta property="og:image" content={image} />

  <!-- JSON-LD Injector -->
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonLd}
</svelte:head>
