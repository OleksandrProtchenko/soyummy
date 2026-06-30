import { createHash } from 'node:crypto';

export const hashToken = (token) =>
  createHash('sha256').update(String(token)).digest('hex');

export const isValidDate = (value) =>
  value instanceof Date && !Number.isNaN(value.getTime());
