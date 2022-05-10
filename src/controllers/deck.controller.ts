import {repository} from '@loopback/repository';
import {get, HttpErrors, param, post, requestBody} from '@loopback/rest';
import {DeckType} from '../enums';
import {ICreateDeck} from '../interfaces';
import {CardsViewModel, Deck, DeckViewModel} from '../models';
import {DeckRepository} from '../repositories';


export class DeckController {
  constructor(
    @repository(DeckRepository) public deckRepository: DeckRepository) {
  }

  @post('/deck/create')
  async createDeck(@requestBody() req: ICreateDeck): Promise<DeckViewModel> {
    if (req) {
      if (!req.type) {
        throw new HttpErrors.BadRequest("'type' is missing in request body");

      } else if (!Object.values(DeckType).includes(req.type)) {
        throw new HttpErrors.BadRequest("Invalid 'type' provided, it should be 'FULL' or 'SHORT'");

      } else if (typeof req.shuffled !== 'boolean') {
        throw new HttpErrors.BadRequest("'shuffled' is missing in request body");

      }

    } else {
      throw new HttpErrors.BadRequest("Invalid request");

    }

    const deckVM = new DeckViewModel();
    const response = await this.deckRepository.createDeck(req);
    deckVM.mapToDeck(response);

    return deckVM;
  }

  @get('/deck/open/{deckId}')
  async openDeck(@param.path.string('deckId') deckId: string): Promise<Deck> {
    const deck = await this.deckRepository.findById(deckId);
    // doesn't need to check null, because if entity not found it will throw error anyway
    deck.remaining = deck.cards.length;

    return deck;
  }

  @get('/deck/drawcards/{deckId}/{count}')
  async drawCards(@param.path.string('deckId') deckId: string,
    @param.path.number('count') count: number): Promise<CardsViewModel> {
    const deck = await this.deckRepository.findById(deckId);

    const cardsVM = new CardsViewModel();
    cardsVM.cards = deck.cards.splice(0, count);

    // now update the entity after withdraw the cards from deck
    await this.deckRepository.update(deck);

    return cardsVM;
  }

}
