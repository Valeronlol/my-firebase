## API Report File for "firebase-admin.installations"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="node" />

import { Agent } from 'http';

// Warning: (ae-forgotten-export) The symbol "App" needs to be exported by the entry point index.d.ts
//
// @public
export function getInstallations(app?: App): Installations;

// @public
export class Installations {
    get app(): App;
    deleteInstallation(fid: string): Promise<void>;
}

```
