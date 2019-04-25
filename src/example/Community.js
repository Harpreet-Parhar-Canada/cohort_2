import City from './City.js'
import myData from './CityList.json'

class Community {
	constructor() {
		this.cityList = [];
		this.counter = 0;
		this.importCity();
 	}

 	 importCity() {
        const tempArray = myData;
        tempArray.forEach(item => {
            this.addCity(item.name,item.lat,item.long,item.population)
        })
    }

	addCity(name,lat,long,population) {
		const obj = new City(this.counter,name,lat,long,population);
		this.cityList.push(obj);
		this.counter++; 
	}

	getPopulation() {
		this.totalPoplution = this.cityList.reduce(function(pop,next) {return pop + next.population;},0)
		return  this.totalPoplution;
	}

	
 mostNorthern() {
        const maxNorth = this.cityList.reduce((a, b) => {
            if (a.lat > b.lat) {
                return a
            }
            return b
        });
        return maxNorth.name;
    }

    mostSouthern() {
        const maxSouth = this.cityList.reduce((a, b) => {
            if (a.lat < b.lat) {
                return a
            }
            return b
        });
        return maxSouth.name;
    }

    
    commMovedIn(id, people) {
        this.cityList.forEach(item => {
            if(item.id === id) {
                item.movedIn(people);
                return 
            }
           
        })
    }

    commMovedOut(id,People) {
    	this.cityList.forEach(item => {
    		if(item.id === id) {
    			item.movedOut(People); 
    			return 
    			 
    		}
    	})

    }
showInfo(id) {
        let answer;
        this.cityList.forEach(item => {
            if(item.id === id) {
                answer = item.showCity();
                return;
            }
        })
        return answer;
    }


deleteCity(id) {
        let index = 0;
        this.cityList.forEach(item => {
            if(item.id === id) {
                this.cityList.splice(index, 1)
                return
            }
            index++;
        })
    }

}

export default Community;
