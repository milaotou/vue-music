import {playMode} from 'common/js/config'

const state = {
	singer:{},
	playing:false,
	fullScreen:false,
	playlist:[],
	seuqenceList:[],
	mode:playMode.sequence,
	currentIndex:-1
}
export default state