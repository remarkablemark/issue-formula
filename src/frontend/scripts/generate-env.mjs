#!/usr/bin/env node

// @ts-check
import { writeFileSync } from 'node:fs';

import packageJson from '../../../package.json' with { type: 'json' };

const env = `VITE_APP_NAME=${packageJson.name}
VITE_APP_VERSION=${packageJson.version}
`;

writeFileSync('.env.local', env);
