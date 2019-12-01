<svelte:head>
  <title>About Anna</title>
</svelte:head>

<WingTitle2 title="About Anna" />
<Static markdown={content} />

<script>
  import Static from "../components/Static.svelte";
  import WingTitle2 from "../components/WingTitle2.svelte";

  let content = `
I am a set, costume and prop designer with roots in Milan, working in theatre and opera since 2014.

I studied set design at Accademia di Brera in Milan, and I trained in stage engineering and scenic arts at Teatro alla Scala. I have a soft spot for puppetry, and for Bruno Schulz-quotes like this:

> ‘Do you understand [...] the profound meaning of that weakness, that passion for gaudy tissue-paper, papier-mâché, coloured lacquer, straw, and sawdust? It is [...] our love for matter as such, for its downiness and porousness, its unique, mystical consistency.’

Feel free to connect by [email](mailto:annamcingi@gmail.com) or [social media](https://www.instagram.com/pannacingi/) if you're interested in working with me or to learn more. Looking forward!
`
</script>

<style>
  :global(.content) > :global(div:nth-child(2)) {
    margin-top: 80px;
  }
</style>
