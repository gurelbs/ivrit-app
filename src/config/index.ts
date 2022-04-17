import { isDevMode } from '@angular/core';
export default {
    apiBaseUrl: isDevMode() ? 'http://localhost:4000' : 'https://api.example.com',
};