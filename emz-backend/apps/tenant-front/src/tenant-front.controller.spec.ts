import { Test, TestingModule } from '@nestjs/testing';
import { TenantFrontController } from './tenant-front.controller';
import { TenantFrontService } from './tenant-front.service';

describe('TenantFrontController', () => {
  let tenantFrontController: TenantFrontController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TenantFrontController],
      providers: [TenantFrontService],
    }).compile();

    tenantFrontController = app.get<TenantFrontController>(TenantFrontController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(tenantFrontController.getHello()).toBe('Hello World!');
    });
  });
});
