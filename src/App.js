
import React, { useState} from 'react';
import RecipeCard from './RecipeCard';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=6e36d658&app_key=da6160c2788096155fd420590b0397a3`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error.message);
      setError('An error occurred while fetching recipes. Check the console for more details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    <div className="container mx-auto mt-6">
    <img src='https://t3.ftcdn.net/jpg/03/97/74/14/360_F_397741479_e47p3OmxqqL8EIY368Yj8eoTLlMI6HSb.jpg' alt='img' className='mx-auto'></img>
         <div className='mx-auto justify-center text-center mt-30'>
          <span>
          <input
          type='text'
          id='input'
          placeholder='Enter the Ingredient'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='h-[3rem] md:h-[3rem] p-5 rounded-l-3xl border  w-50 md:w-[40rem]'
          ></input></span>
          <span>
          <button onClick={handleSearch} className='bg-orange-500 rounded-r-3xl px-4 m h-[3rem] md:h-[3rem] text-white border '><svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button>
          </span>
          </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.recipe.uri} recipe={recipe.recipe} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default App;
