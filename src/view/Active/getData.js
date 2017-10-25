import axios from 'axios'

export function getActiviyNormal() {
    return axios.get('./static/activity_data.json')
}