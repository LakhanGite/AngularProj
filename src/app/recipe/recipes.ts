import { Ingridient } from './ingridient';

export class Recipes{
    constructor(public name: string, public description: string, public imagePath: string, 
    public ingridients: Ingridient[]){

    }
}