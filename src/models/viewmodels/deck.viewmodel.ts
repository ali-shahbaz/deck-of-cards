import {Deck} from '../deck.model';

export class DeckViewModel {
  deckId: string;
  type: string;
  shuffled: boolean;
  remaining: number;

  public mapToDeck(deck: Deck): void {
    this.deckId = deck.deckId;
    this.type = deck.type;
    this.shuffled = deck.shuffled;
    this.remaining = deck.remaining;
  }

}
