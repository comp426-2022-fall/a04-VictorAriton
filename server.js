#!/usr/bin/env node

import express from 'express';
import {roll} from './lib/roll.js';
import parseArgs from 'minimist';

const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port || 5000;