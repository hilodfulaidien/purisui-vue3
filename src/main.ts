import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 注册插件 vite-plugin-svg-icons 的脚本
import 'virtual:svg-icons-register'

createApp(App).mount('#app')
