export class Phone {
  id: number;
  brand: string;
  model: string;
  imageUrl: string;
  constructor(id: number, brand: string, model: string, imageUrl: string) {
    return new Phone(id, brand, model, imageUrl);
  }
}
