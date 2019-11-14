import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { async } from 'rxjs/internal/scheduler/async';
import { getConnection } from 'typeorm';
import { NestApplication } from '@nestjs/core';

describe('AppController (e2e)', () => {
  let app: NestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    let expected = [{"id":1,"name":"Kiki","typeId":1,"age":1,"breed":"labrador"}];
    return request(app.getHttpServer())
      .get('/animals')
      .expect(200)
      .expect(expected);
  });
});
