import { Request, Response, NextFunction } from 'express';

interface AsyncHandlerOptions {
  logError?: boolean;
}

function asyncHandler(fn: Function, options: AsyncHandlerOptions = {}) {
  return function asyncHandlerWrapper(req: Request, res: Response, next: NextFunction) {
    return Promise.resolve(fn(req, res, next)).catch((error) => {
      if (options.logError) {
        console.error('Error:', error);
      }
      next(error);
    });
  };
}

export default asyncHandler;