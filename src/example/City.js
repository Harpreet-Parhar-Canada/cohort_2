
class City {
constructor(id,name,lat,long,population) {
	this.id=id;
	this.name=name;
	this.lat=lat;
	this.long=long;
	this.population=population;
}
showCity() {
	return `${this.id} ${this.name} ${this.lat} ${this.long} ${this.population}`
}
movedIn(newPeople) {
	this.population = this.population + newPeople;
	return this.population
}
movedOut(newPeople) {
	this.population = this.population - newPeople;
	return this.population
}

howBig() {
	let answer;
        if(this.population > 100000) {
            answer = 'City'
        } else if (this.population>20000 && this.population <= 100000) {
             answer = 'Large Town'
        } else if ( this.population>1000 && this.population <= 20000) {
           answer ='Town'
        } else if ( this.population>100 &&this.population <= 1000) {
            answer = 'Village'
        } else if (this.population>=1&&this.population <= 100) {
            answer = 'Hamlet'
        }
        return answer;
        
    }
     whichSphere() {
        let sphere;
        if (this.lat > 0) {
            sphere = 'North';
        } else if (this.lat < 0) {
            sphere = 'South';
        } else {
            sphere = 'You are either on the Equator, or need to enter a Latitude'
        }

        return sphere;
    }



}

export default City;
