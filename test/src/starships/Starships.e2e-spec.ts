import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { GenericContainer, Wait } from 'testcontainers';
import { AppModule } from '../../../src/app.module';

const fs = require('fs');

describe('ProductsController (e2e)', () => {
  let app: INestApplication;
  let container;

  jest.setTimeout(30000);

  afterAll(async (done) => {
    container.stop();
    done();
  });

  beforeEach(async (done) => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    done();
  });

  //
  it('/ [POST] (Register Starship)', async (done) => {
    const rawdata = fs.readFileSync(`${__dirname}/data/create.json`);

    const response = await request(app.getHttpServer())
      .post('/starships/')
      .send(JSON.parse(rawdata));

    expect(response.status).toBe(201);
    expect(response.body.id).not.toBeNull();
    expect(response.body.price).toBe(1000);
    done();
  });

  it('/ [GET] (List Stored Starships)', async (done) => {
    const response = await request(app.getHttpServer())
      .get('/starships/stored')
      .send();

    expect(response.status).toBe(201);
    expect(response.body.id).not.toBeNull();
    expect(response.body.price).toBe(1000);
    done();
  });
});
