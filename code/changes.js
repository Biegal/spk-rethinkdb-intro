/*globals require,process*/
var r = require('rethinkdb');

r.connect({
        host: '192.168.1.217',
        port: 28015,
        db: 'Music'
    },
    function(err, conn) {
        r.table("Albums").changes().run(conn, function(err, cursor) {
            cursor.each(console.log);
        });
    });


console.log('Press any key to exit');

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));