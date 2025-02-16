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
      value: city,
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
      'Los Angeles': ['Le Bernardin', 'Katzs Delicatessen', 'Peter Luger Steak House'],
      'San Francisco': ['Tartine Bakery', 'Zuni Café', 'House of Prime Rib'],
      'New York': ['In-N-Out Burger', 'Taco Bell', 'McDonalds'],
      'San Diego': ['The French Laundry', 'Per Se', 'Eleven Madison Park']
    };
    const givenCity = city.toLowerCase();
    const resturant = examples[givenCity] || `List of popular restaurants in ${city}`;
    return {
      value: resturant,
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
      'New York': ['New York Public Library', 'Brooklyn Public Library', 'Queens Library'],
      'San Francisco': ['San Francisco Public Library', 'Mission Bay Library', 'Chinatown Branch Library'],
      'Los Angeles': ['Los Angeles Public Library', 'Central Library', 'West Valley Regional Branch Library'],
      'San Diego': ['San Diego Public Library', 'Central Library', 'Mission Valley Branch Library']
    };
    const libraries = examples[city.toLowerCase()] || `List of public libraries in ${city}`;
    // Populated when a tool is called with a tool call from a model as input
    return {
      // update the state keys
      value: libraries,
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
      'New York': ['Statue of Liberty', 'Empire State Building', 'Brooklyn Bridge'],
      'San Francisco': ['Golden Gate Bridge', 'Coit Tower', 'Alcatraz Island'],
      'Los Angeles': ['Hollywood Sign', 'Griffith Observatory', 'Los Angeles City Hall'],
      'San Diego': ['USS Midway Museum', 'Cabrillo National Monument', 'Old Point Loma Lighthouse']
    };
    const monuments = examples[city.toLowerCase()] || `List of famous monuments in ${city}`;
    // Populated when a tool is called with a tool call from a model as input
    return {
      // update the state keys
      value: monuments,
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
      'New York': ['10001', '10011', '10022'],
      'San Francisco': ['94102', '94103', '94109'],
      'Los Angeles': ['90001', '90011', '90022'],
      'San Diego': ['92101', '92111', '92122']
    };
    return {
      value: examples[city.toLowerCase()] || `List of zip codes in ${city}`,
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
      'New York': ['Coney Island Beach', 'Rockaway Beach', 'Brighton Beach'],
      'San Francisco': ['Baker Beach', 'Ocean Beach', 'China Beach'],
      'Los Angeles': ['Venice Beach', 'Santa Monica Beach', 'Malibu Beach'],
      'San Diego': ['La Jolla Cove', 'Coronado Beach', 'Pacific Beach']
    };
    return {
      value: examples[city.toLowerCase()] || `List of beautiful beaches in ${city}`,
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
