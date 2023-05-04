const mysql = require('mysql2/promise');

class RepliesManager {
    constructor(table) {
        this.table = table;
        this.pool = mysql.createPool({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });

        this.init();
    }

    async init() {
        await this.pool.execute(`CREATE TABLE IF NOT EXISTS ${this.table} (
            \`trigger\` VARCHAR(255) PRIMARY KEY,
            response TEXT NOT NULL
        )`);
    }

    async getResponse(message) {
        // To be implemented in subclasses
    }

    async add(trigger, response) {
        try {
            await this.pool.execute(`INSERT INTO ${this.table} (\`trigger\`, response) VALUES (?, ?)`, [trigger, response]);
        } catch (err) {
            // TODO: Add message when trigger exists instead of breaking the app
            if (err.code === 'ER_DUP_ENTRY') {
                throw 'Trigger already exists!';
            }
            throw err;
        }
    }

    async remove(trigger) {
        const [result] = await this.pool.execute(`DELETE FROM ${this.table} WHERE \`trigger\` = ?`, [trigger]);
        if (result.affectedRows === 0) {
            throw "Trigger doesn't exist!";
        }
    }

    async get() {
        const [rows] = await this.pool.query(`SELECT * FROM ${this.table}`);
        return rows.reduce((acc, row) => {
            acc[row.trigger] = row.response;
            return acc;
        }, {});
    }

    async getList() {
        const [rows] = await this.pool.query(`SELECT \`trigger\` FROM ${this.table}`);
        let list = '```\n';
        rows.forEach(row => {
            list += `${row.trigger}\n`;
        });
        list += '```';
        return list;
    }
}

exports.RepliesManager = RepliesManager;