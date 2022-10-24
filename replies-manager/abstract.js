const fs = require('node:fs');

class RepliesManager {

    constructor(path) {
        this.path = path;
        this.replies = {};

        this.init();
    }
    
    init() {

        if (!fs.existsSync(this.path)) {
            fs.writeFileSync( this.path, '' );
        }

        try {
            let rawReplies = fs.readFileSync(this.path);
            this.replies = JSON.parse(rawReplies);  
        } catch (e) {
            this.replies = {};
        }
    }


    getResponse(message) {
        return '';
    }

    add(trigger, response) {

        if (trigger in this.replies) {
            throw 'Trigger already exists!';
        }

        this.replies[trigger] = response;
        this.save();

        return true;
    }

    remove(trigger) {

        if (!(trigger in this.replies)) {
            throw "Trigger doesn't exists!";
        }

        delete this.replies[trigger]; 

        this.save();

        return true;
    }

    save() {
        fs.writeFileSync(this.path, JSON.stringify(this.replies));
    }

    get() {
        return this.replies;
    }

    getList() {
        let list = '```\n';

        for (let trigger in this.replies) {
            list += `${trigger}\n`;
        }

        list += '```';

        return list;
    }
}

exports.RepliesManager = RepliesManager;