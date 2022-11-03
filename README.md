# tnt-tracking-ts

SOAP client for TNT tracking web service in typescript.

This package is generated using the definition located here: https://www.tnt.fr/service/tracking?wsdl.

## Install

```shell
npm i @agriconomie-oms/tnt-tracking-ts
```

or

```shell
yarn add @agriconomie-oms/tnt-tracking-ts
```

## Usage

```typescript
import { createClientAsync } from '@agriconomie-oms/tnt-tracking-ts';

const client = await createClientAsync('https://www.tnt.fr/service/tracking?wsdl');
```

See https://github.com/vpulim/node-soap for further information about usage of SOAP client.

## Generate client

To generate a new version of this client use

```shell
yarn generate
```
