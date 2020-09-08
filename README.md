# jscodeshift-with-typescript

This is sample `jscodeshift` project with `TypeScript`.

## Run jscodeshift

```bash
$ npx jscodeshift -t transform.ts index.ts --parser ts
```

## Dry Run jscodesfhit

```bash
$ npx jscodeshift -t transform.ts index.ts --parser ts -p -d
```

## Tests

```bash
$ npm run test
or
$ npm run test:w
```