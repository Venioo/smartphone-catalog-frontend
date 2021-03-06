import {Phone} from '../phone/phone';

export class Page {
  content: Phone[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  first: boolean;
  sort: string;
  numberOfElements: number;
}
