import {model, property} from '@loopback/repository';

@model()
export class Card {
  @property() value: string;
  @property() suit: string;
  @property() code: string;
}
