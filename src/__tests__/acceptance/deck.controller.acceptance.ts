import {Client, expect} from '@loopback/testlab';
import {CardsDeckApplication} from '../..';
import {setupApplication} from './test-helper';

// BDD
describe('DeckController', () => {
  let app: CardsDeckApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  context('create FULL and SHORT deck of cards with proper parameters', () => {
    it('FULL shuffled deck of cards created', async () => {
      const requestBody = {
        type: 'FULL',
        shuffled: true
      }

      const res = await client
        .post('/deck/create')
        .send(requestBody)
        .expect(200);

      expect(res.body).to.containEql({remaining: 52});
    });

    it('SHORT non-shuffled deck of cards created', async () => {
      const requestBody = {
        type: 'SHORT',
        shuffled: false
      }

      const res = await client
        .post('/deck/create')
        .send(requestBody)
        .expect(200);

      expect(res.body).to.containEql({remaining: 36});
    });
  });

  context('should throw exception when provided wrong or missing parameters', () => {
    it('should expect 400 Bad Request when type has wrong value in params', async () => {
      const requestBody = {
        type: 'FULL1',
        shuffled: true
      }

      await client.post('/deck/create').send(requestBody).expect(400);
    });
  });

});
