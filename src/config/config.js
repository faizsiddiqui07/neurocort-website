const production = 'production'
const development = 'development'

const mode = development
let base_url = ''


if (mode === production) {
    base_url = ''
} else {
    base_url = 'http://13.127.6.156:5000'
}

export {base_url}