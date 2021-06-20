import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should list books', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
      query {
        books {
          id
          title
          author
        }
      }      
      `,
      })
      .expect((res) =>
        expect(res.body).toEqual({
          data: {
            books: [
              {
                id: 'd9212ff5-4a6d-4f83-9772-8d674aef0318',
                title: 'O Pescador',
                author: 'Bruno Pedro',
              },
              {
                id: 'a203a578-aa9d-4a57-850f-40369871058f',
                title: 'O Pescador que Nadava',
                author: 'Bruno Pedro',
              },
            ],
          },
        }),
      );
  });
});
