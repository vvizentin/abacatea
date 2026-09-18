import '@testing-library/jest-dom';

// Mock IntersectionObserver for jsdom environment
class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
    this.entries = [];
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.IntersectionObserver = IntersectionObserver;
