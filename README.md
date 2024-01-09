# node-async-handler

Async Error Handling Middleware for Express with ESM Support

This middleware helps you eliminate the need for ```try-catch``` blocks throughout your Express application, streamlining error handling and improving code readability.

> **Note** : This is made specifically for ExpressJS projects.

## Usage

To use ```node-async-handler```, simply wrap your async functions in the asyncHandler middleware:

```ts
// For ESM
import pkg from 'node-async-handler';
const { asyncHandler } = pkg;

// For CommonJS
const { asyncHandler } = require('node-async-handler');

express.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const result = await someAsyncFunction();
  res.json(result);
}));
```

In case of an error, the middleware automatically calls ```next(error)```, allowing centralized error handling in your Express app.

## Importing

> **Note** : To import ```node-async-handler``` in ESM:
>
> ```ts
> import pkg from 'node-async-handler';
> const { asyncHandler } = pkg;
>```

> **Note** : To import ```node-async-handler``` in CommonJS:
>
> ```ts
> const { asyncHandler } = require('node-async-handler');
>```

## License

This project is licensed under the MIT License. See the [LICENSE file](https://github.com/pacifiquem/node-async-handler/blob/main/LICENSE) for details.

<p align="right" style="color: gray;">Author: MURANGWA Pacifique</p>
