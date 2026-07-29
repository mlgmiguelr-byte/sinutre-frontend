import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sinutre-backend-production-ddc0.up.railway.app'
});
import { Food } from '@/types/food';

export async function getFoods() {
  const response = await api.get<Food[]>('/foods');
  return response.data;
}

export async function createFood(
  food: Omit<Food, 'id'>,
) {
  const response = await api.post(
    '/foods',
    food,
  );

  return response.data;
}

export async function searchFoods(
  search: string,
) {
  const response = await api.get('/foods', {
    params: {
      search,
    },
  });

 return response.data;

}