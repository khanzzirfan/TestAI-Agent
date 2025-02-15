import { z } from 'zod';
import { tool } from '@langchain/core/tools';
import { Annotation, Command, MessagesAnnotation } from '@langchain/langgraph';

// Define the tools for the agent to use
export const testSearch = tool(
  async ({ query }) => {
    // This is a placeholder, but don't tell the LLM that...
    if (query.toLowerCase().includes('sf') || query.toLowerCase().includes('san francisco')) {
      return "It's 60 degrees and foggy.";
    }
    return "It's 90 degrees and sunny.";
  },
  {
    name: 'search',
    description: 'Call to surf the web.',
    schema: z.object({
      query: z.string().describe('The query to use in your search.')
    })
  }
);

const getWeather = tool(
  input => {
    if (['sf', 'san francisco'].includes(input.location.toLowerCase())) {
      return "It's 60 degrees and foggy.";
    } else {
      return "It's 90 degrees and sunny.";
    }
  },
  {
    name: 'get_weather',
    description: 'Call to get the current weather.',
    schema: z.object({
      location: z.string().describe('Location to get the weather for.')
    })
  }
);

export const getCoolestCities = tool(
  ({ state }, config) => {
    const examples: Record<string, string[]> = {
      california: ['San Francisco', 'Los Angeles', 'San Diego'],
      'new york': ['New York City', 'Buffalo', 'Rochester']
    };
    const city = examples[state.toLowerCase()] || `List of coolest cities in ${state}`;
    return {
      // update the state keys
      city: city,
      hasCity: true
    };
  },
  {
    name: 'get_coolest_cities',
    description: 'Get a list of coolest cities in a given state',
    schema: z.object({
      state: z.string().describe('The name of the state to get cities for.')
    })
  }
);

const getCityRestaurants = tool(
  ({ city }, config) => {
    const examples: Record<string, string[]> = {
      ny: ['Le Bernardin', 'Katzs Delicatessen', 'Peter Luger Steak House'],
      sf: ['Tartine Bakery', 'Zuni Café', 'House of Prime Rib']
    };
    const givenCity = city.toLowerCase();
    const resturant = examples[givenCity] || `List of popular restaurants in ${city}`;
    return {
      resturant: resturant,
      hasCityRestaurants: true
    };
  },
  {
    name: 'get_city_restaurants',
    description: 'Get a list of popular restaurants in a city',
    schema: z.object({
      city: z.string().describe('The name of the city to get restaurants for.')
    })
  }
);

const getCityLibraries = tool(
  ({ city }, config) => {
    const examples: Record<string, string[]> = {
      ny: ['New York Public Library', 'Brooklyn Public Library', 'Queens Library'],
      sf: ['San Francisco Public Library', 'Mission Bay Library', 'Chinatown Branch Library']
    };
    const libraries = examples[city.toLowerCase()] || `List of public libraries in ${city}`;
    // Populated when a tool is called with a tool call from a model as input
    return {
      // update the state keys
      libraries: libraries,
      hasCityLibraries: true
    };
  },
  {
    name: 'get_city_libraries',
    description: 'Get a list of public libraries in a city',
    schema: z.object({
      city: z.string().describe('The name of the city to get libraries for.')
    })
  }
);

const getCityMonuments = tool(
  ({ city }, config) => {
    const examples: Record<string, string[]> = {
      ny: ['Statue of Liberty', 'Empire State Building', 'Brooklyn Bridge'],
      sf: ['Golden Gate Bridge', 'Coit Tower', 'Alcatraz Island']
    };
    const monuments = examples[city.toLowerCase()] || `List of famous monuments in ${city}`;
    // Populated when a tool is called with a tool call from a model as input
    return {
      // update the state keys
      monuments: monuments,
      hasCityMonuments: true
    };
  },
  {
    name: 'get_city_monuments',
    description: 'Get a list of famous monuments in a city',
    schema: z.object({
      city: z.string().describe('The name of the city to get monuments for.')
    })
  }
);

const getCityZipCodes = tool(
  ({ city }) => {
    const examples: Record<string, string[]> = {
      ny: ['10001', '10011', '10022'],
      sf: ['94102', '94103', '94109']
    };
    return {
      zipcodes: examples[city.toLowerCase()] || `List of zip codes in ${city}`,
      hasCityZipCodes: true
    };
  },
  {
    name: 'get_city_zip_codes',
    description: 'Get a list of zip codes in a city',
    schema: z.object({
      city: z.string().describe('The name of the city to get zip codes for.')
    })
  }
);

const getCityBeaches = tool(
  ({ city }) => {
    const examples: Record<string, string[]> = {
      ny: ['Coney Island Beach', 'Rockaway Beach', 'Brighton Beach'],
      sf: ['Baker Beach', 'Ocean Beach', 'China Beach']
    };
    return {
      beaches: examples[city.toLowerCase()] || `List of beautiful beaches in ${city}`,
      hasCityBeaches: true
    };
  },
  {
    name: 'get_city_beaches',
    description: 'Get a list of beautiful beaches in a city',
    schema: z.object({
      city: z.string().describe('The name of the city to get beaches for.')
    })
  }
);

export { getCityRestaurants, getCityLibraries, getCityMonuments, getCityZipCodes, getCityBeaches };
