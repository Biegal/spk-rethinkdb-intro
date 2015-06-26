var r = require('rethinkdb');

// r.connect({
//         host: '192.168.0.102',
//         port: 28015
//     },
//     function(err, conn) {
// 		r.dbCreate('music').run(conn, function(err, res) {
// 			console.log(res);
// 		});
//     });



// r.connect({
//         host: '192.168.0.102',
//         port: 28015,
//         db: 'music'
//     },
//     function(err, conn) {
// 		var albums = require('./albums');

// 		albums.forEach(function(album) {
// 			r.table('albums').insert(album).run(conn, {noreply: true, durability: 'hard'}, function(err, res) {
// 				console.log(res);
// 			});
// 		});
//     });



// r.connect({
//         host: '192.168.0.102',
//         port: 28015,
//         db: 'music'
//     },
//     function(err, conn) {
// 		var albums = require('./albums');

// 			r.table('albums').insert(albums).run(conn, {noreply: true, durability: 'soft'}, function(err, res) {
// 				console.log(res);
// 			});
//     });