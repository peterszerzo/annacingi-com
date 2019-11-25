<svelte:head>
  <title>{status}</title>
</svelte:head>

<WingTitle2 title="Error" tags={[status]} />

<Static markdown={`
\`\`\`
${error.message}

${error.stack}
\`\`\`
`} />

<script>
  import WingTitle2 from "../components/WingTitle2.svelte";
  import Static from "../components/Static.svelte";

  export let status;
  export let error;

  console.log(status, error);

  const dev = process.env.NODE_ENV === 'development';
</script>

<style>
</style>
