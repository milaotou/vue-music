export default class Song{
	constructor({id,mid,singer,name,album,dutation,image,url}) {
		this.id=id
		this.mid=mid
		this.singer=singer
		this.name=name
		this.album=album
		this.dutation=dutation
		this.image=image
		this.url=url
	}
}

export function createSong(musicData){
	return new Song({
		id:musicData.songid,
		mid:musicData.songmid,
		singer:filterSinger(musicData.singer),
		name:musicData.songname,
		album:musicData.albumname,
		dutation:musicData.interval,
		image:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
		url:`https://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
	})
}

function filterSinger(singer){
	let ret=[]
	if(!singer){
		return ''
	}
	singer.forEach((s)=>{
		ret.push(s.name)
	})
    return ret.join('/')
}