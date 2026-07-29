import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sinutre-backend-production-ddc0.up.railway.app'
});

export async function createMeal(
  meal: {
    type: string;
    eatTime: string;
    description?: string;

    items: {
      foodId: number;
      grams: number;
    }[];
  },
) {
  return api.post('/meals', meal);
}