import { createApp } from 'vue'
import App from './App.vue'
import api from './../../app/api/api_desc'
import workObject from "../../app/js/work_object"

const app = createApp(App);

app.config.globalProperties.api = api
app.config.globalProperties.workObject = workObject

app.provide('api', app.config.globalProperties.api)
app.provide('workObject', app.config.globalProperties.workObject)

app.mount('#app')
