import '@/shared/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { App } from '@/features/app'
import router from './router'

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')
