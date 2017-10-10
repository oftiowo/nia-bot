const helpCommands = require('./help-commands.js');
const infoCommands = require('./info-commands.js');
const memeCommands = require('./meme-commands.js');
const musicCommands = require('./music-commands.js');
const miscCommands = require('./misc-commands.js');
const moarCowmands = require('./more-commands.js')
const someMoarCowmands = require('./more-commands.json');

var prefix = '';
var textCommands = exports.textCommands = {};

exports.respond = function (message) {
    if (message.content.substring(0, prefix.length) == prefix) {
        var args = message.content.substring(prefix.length).toLowerCase().split('[ ]');
        var cmd = args[0];
        args = args.slice(1);
        if (typeof textCommands[cmd] === 'function') {
            textCommands[cmd](message, args);
        }
    }
}

// Help commands.
textCommands['???'] = helpCommands.help;

// Info commands.
textCommands['uinfo'] = infoCommands.uinfo;
textCommands['uavatar'] = infoCommands.uavatar;
textCommands['sinfo'] = infoCommands.sinfo;
textCommands['savatar'] = infoCommands.savatar;

// Meme commands.
textCommands['kimochi'] = memeCommands.kimochi;
textCommands['xd'] = memeCommands.xd;
textCommands['gweentea'] = memeCommands.gweenTea;
textCommands['cawfee'] = memeCommands.cawfee;

// Music commands.
textCommands['join'] = musicCommands.join;
textCommands['leave'] = musicCommands.leave;
textCommands['play'] = musicCommands.play;
textCommands['plai'] = musicCommands.playImmediately;
textCommands['pause'] = musicCommands.pause;
textCommands['queue'] = musicCommands.queue;
textCommands['skip'] = musicCommands.skip;
textCommands['remove'] = musicCommands.remove;
textCommands['moe'] = musicCommands.moe;

// Misc commands.
textCommands['ping'] = miscCommands.ping;

// Some moar cowmands.
textCommands['meme'] = moarCowmands.meme;
textCommands['addmeme'] = moarCowmands.addMeme;
textCommands['removememe'] = moarCowmands.removeMeme;

