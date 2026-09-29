import { describe, expect, it } from 'vitest';

import { greet } from './index.js';

describe('greet', () => {
  it('greets in Ukrainian', () => {
    expect(greet('Оля')).toBe('Привіт, Оля!');
  });
});
