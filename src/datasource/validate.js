const glob = require('glob');
const path = require('path');

function countEmoji(emojis) {
    return emojis.map(emoji => {
        let comp;
        if (emoji.length === 1) {
            comp = emoji.charCodeAt(0);
        }
        comp = (
            (emoji.charCodeAt(0) - 0xD800) * 0x400
        + (emoji.charCodeAt(1) - 0xDC00) + 0x10000
        );

        if (comp < 0) {
            comp = emoji.charCodeAt(0);
        }

        return comp.toString('16')
    }).length;
}

glob(`${__dirname}/*.json`, {}, (err, files) => {
    if (process.argv.slice(2)[0] === 'total-emoji') {
        files.forEach(file => {
            const jsonFile = require(file)
            if (countEmoji(jsonFile.animeEmoji.split(' ')) > 8) {
                process.stdout.write(`${jsonFile.animeName} has emoji more than 8.\n`);
                process.exit(1)
            }
        })
    } else if (process.argv.slice(2)[0] === 'file-name') {
        files.forEach(file => {
            const fileName = path.parse(file).name
            if (!new RegExp(/^([a-z0-9][a-z0-9]*)(-[a-z0-9]+)*$/).test(fileName)) {
                process.stdout.write(`${fileName} is not in the right pattern. Please use kebab-case.\n`);
                process.exit(1);
            }
        });
    }
})