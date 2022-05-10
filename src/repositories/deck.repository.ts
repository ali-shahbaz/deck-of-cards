import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {DeckType} from '../enums';
import {ICreateDeck} from '../interfaces';
import {Deck} from '../models';

export class DeckRepository extends DefaultCrudRepository<Deck, typeof Deck.prototype.deckId> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Deck, dataSource);
  }

  public createDeck(request: ICreateDeck): Promise<Deck> {
    const deck = new Deck();
    deck.type = request.type.toString();
    deck.shuffled = request.shuffled;

    const isShort = request.type === DeckType.FULL ? false : true;
    deck.cards = deck.createCardsDeck(isShort, request.shuffled);
    deck.remaining = deck.cards.length;

    return this.create(deck);
  }
}
