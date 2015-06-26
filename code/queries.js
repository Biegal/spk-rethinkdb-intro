/* sample queries for data explorer */

r.db("music").table("albums").concatMap(function(album){
  return album('Tracks')
}).filter(function(track) {
  return track('Name').eq('Maria')
})




r.db("music").table("albums").filter(function(album){
  return album("Tracks").contains(function(track){
  	return track("Genre").eq("Metal")
  })
})



r.db("music").table("albums").filter(function(album){
  return album("Tracks").contains(function(track){
  	return track("Genre").eq("Metal")
  })
}).orderBy("Artist")
  .skip(5)
  .limit(5)
  .concatMap(function(album){
    return album("Tracks")("Name")
  })




  r.db('music').table('albums').filter(function(album){
	return album('Artist').match('(?i)ac')
})



r.db('music').table('albums').concatMap(function(album){
  return album('Tracks')
}).merge(function(track){
  return {album: r.db('music').table('albums').filter({AlbumId: track('AlbumId')}).pluck('Title').coerceTo('array').nth(0)('Title')}
})