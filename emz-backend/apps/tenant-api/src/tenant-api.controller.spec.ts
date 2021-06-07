import { Test, TestingModule } from '@nestjs/testing';
import { TenantApiController } from './tenant-api.controller';
import { TenantApiService } from './tenant-api.service';

describe('TenantApiController', () => {
  let tenantApiController: TenantApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TenantApiController],
      providers: [TenantApiService],
    }).compile();

    tenantApiController = app.get<TenantApiController>(TenantApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(tenantApiController.getHello()).toBe('Hello World!');
    });
  });
});
