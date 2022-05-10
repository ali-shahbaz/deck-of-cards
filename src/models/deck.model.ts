import {Entity, model, property} from '@loopback/repository';
import {ArrayHelper} from '../helpers';
import {INameValuePair} from '../interfaces';
import {Card} from './card.model';

@model()
export class Deck extends Entity {
  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuidv4'
  })
  deckId: string;

  @property() type: string;
  @property() shuffled: boolean;
  @property() remaining: number;
  @property.array(Card) cards: Card[];

  public getSuits(): INameValuePair[] {
    return [{name: 'SPADES', value: 'S'},
    {name: 'CLUBS', value: 'C'},
    {name: 'DIAMONDS', value: 'D'},
    {name: 'HEARTS', value: 'H'}];
  }

  public getRanks(isShort: boolean): INameValuePair[] {
    if (isShort) {
      return [{name: 'ACE', value: 'A'},
      {name: '6', value: '6'},
      {name: '7', value: '7'},
      {name: '8', value: '8'},
      {name: '9', value: '9'},
      {name: '10', value: '10'},
      {name: 'JACK', value: 'J'},
      {name: 'QUEEN', value: 'Q'},
      {name: 'KING', value: 'K'}];

    } else {
      return [{name: 'ACE', value: 'A'},
      {name: '2', value: '2'},
      {name: '3', value: '3'},
      {name: '4', value: '4'},
      {name: '5', value: '5'},
      {name: '6', value: '6'},
      {name: '7', value: '7'},
      {name: '8', value: '8'},
      {name: '9', value: '9'},
      {name: '10', value: '10'},
      {name: 'JACK', value: 'J'},
      {name: 'QUEEN', value: 'Q'},
      {name: 'KING', value: 'K'}];

    }
  }

  public createCardsDeck(isShort = false, isShuffled = false): Card[] {
    const suits = this.getSuits();
    const ranks = this.getRanks(isShort);
    const cards: Card[] = [];

    for (const rank of ranks) {
      for (const suit of suits) {
        const card = new Card();
        card.value = rank.name;
        card.suit = suit.name;
        card.code = rank.value + suit.value;

        cards.push(card);
      }

    }

    if (isShuffled) {
      return ArrayHelper.shuffle<Card>(cards);
    }

    return cards;
  }
}
