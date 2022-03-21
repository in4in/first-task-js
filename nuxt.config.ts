import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
    css: [
        '@/assets/css/main.scss'
    ],
    meta: {
        link: [
            {rel: 'stylesheet', href: 'http://fonts.googleapis.com/icon?family=Material+Icons'}
        ],
    }
});
