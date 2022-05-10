import {DeckType} from '../enums';

export interface ICreateDeck {
  type: DeckType;
  shuffled: boolean;
}
