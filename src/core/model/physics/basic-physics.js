import Physics from './physics';

export default class BasicPhysics extends Physics {
	constructor(config) {
		super(config);
	}
	
	move(center) {
		if(this.speed.amp < this.speed.max) {
			this.speed.amp = Math.min(this.speed.amp + this.acc, this.speed.max);
		}
		
		return {
			x: center.x + this.speed.amp * Math.cos(this.speed.angle),
			y: center.y + this.speed.amp * Math.sin(this.speed.angle)
		};
	}
}
