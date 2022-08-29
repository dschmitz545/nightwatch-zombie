//import { Pool } from 'pg'
var Pool = require('pg-pool')

const stringConnection = "postgresql://postgres:qaninja@pgdb:5432/zombieplus"
const pool = new Pool({connectionString: stringConnection})


function removeByTitle (title){
    pool.query(`DELETE FROM movies where title = "${title}"`)
}

module.exports = removeByTitle
// export {removeByTitle}
// export default function