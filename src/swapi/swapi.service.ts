import { Injectable, Query } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SwapiService {
  async getCharacters(pageNumber: string) {
    try {
      return await axios
        .get(`https://swapi.dev/api/people/?page=${pageNumber}`)
        .then((res) => res.data);
    } catch (error) {
      console.log(error);
    }
  }
}
