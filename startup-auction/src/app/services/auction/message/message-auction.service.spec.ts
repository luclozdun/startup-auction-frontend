import { TestBed } from '@angular/core/testing';

import { MessageAuctionService } from './message-auction.service';

describe('MessageAuctionService', () => {
  let service: MessageAuctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageAuctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
