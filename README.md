# asyncaid

Async Error Handling Middleware for Express with ESM Support

This middleware helps you eliminate the need for ```try-catch``` blocks throughout your Express application, streamlining error handling and improving code readability.

> **Note** : This is made specifically for ExpressJS projects.

## Usage

To use ```asyncaid```, simply wrap your async functions in the asyncHandler middleware:

```ts
import asyncHandler from 'asyncaid';

express.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const result = await someAsyncFunction();
  res.json(result);
}));
```

In case of an error, the middleware automatically calls ```next(error)```, allowing centralized error handling in your Express app.

## License

This project is licensed under the MIT License. See the [LICENSE file](https://github.com/pacifiquem/asyncaid/blob/main/LICENSE) for details.

<p align="right">Author: MURANGWA Pacifique</p>
