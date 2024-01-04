import { describe, it, expect } from 'vitest';
import asyncHandler from '../src/asyncErrorHandler';

describe('asyncHandler', () => {

  it('should catch exceptions of a function passed into it', async () => {
    const error = new Error('catch me!')
    const foo = asyncHandler(() => {
      throw error
    });
    expect(foo).to.throw(error)
  });

});
