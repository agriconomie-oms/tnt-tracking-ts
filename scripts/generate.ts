import * as fs from 'fs';
import { parseAndGenerate } from 'wsdl-tsclient';

const webserviceUrl = 'https://www.tnt.fr/service/tracking?wsdl';
const outDir = __dirname + '/../src';

fs.rmSync(outDir, {
  recursive: true,
  force: true,
});

parseAndGenerate(webserviceUrl, outDir);
