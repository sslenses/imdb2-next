import Results from '@/components/Results';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  let url;

  if (genre === 'fetchTopRated') {
    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  } else {
    url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`;
  }

  try {
    const res = await fetch(url, { next: { revalidate: 10000 } });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    const results = data.results;

    return (
      <div>
        <Results results={results} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div className="text-center mt-10">
        <h1>Something went wrong. Please try again later.</h1>
      </div>
    );
  }
}