import "@testing-library/jest-dom"; // Adds custom matchers for assertions

import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;