

export async function getRickMortyApi() {
    // fetch post data from an external API endpoint
    const res = await fetch('https://rickandmortyapi.com/api/character');
    return res.json();
  }