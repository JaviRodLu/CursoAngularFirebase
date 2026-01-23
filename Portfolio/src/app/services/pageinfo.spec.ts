import { TestBed } from '@angular/core/testing';

import { Pageinfo } from './pageinfo';

describe('Pageinfo', () => {
  let service: Pageinfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pageinfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
