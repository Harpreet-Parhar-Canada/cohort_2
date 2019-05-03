import Community from './Community.js';
import City from './City.js'

test('Test the Account functions', () => {
	console.log('Test 1');
	const obj = new Community(); 
	expect(obj.cityList.length).toBe(4);

	
	console.log('Test 2');
	expect(obj.cityList[0].name).toBe('Calgary');
	
	console.log('Test 3',obj.getPopulation());
    expect(obj.getPopulation()).toBe(3521116);

    console.log('Test 4 for high');
    expect(obj.mostNorthern()).toBe('Edmonton');
    
    console.log('Test 5 for high');
    expect(obj.mostSouthern()).toBe('Hamilton');

    console.log('Test 6 for high');
    obj.addCity("Kitchener",43.446976,-80.472484,417001);

    console.log(obj.cityList);
    expect(obj.cityList.length).toBe(5);

    console.log(" Test 8");
    obj.commMovedIn(3,1000);
    console.log(obj.cityList[3].population);
    expect(obj.cityList[3].population).toBe(633063);

    console.log(" Test 9");
    obj.commMovedOut(2,10);
    console.log(obj.cityList[2].population);
    expect(obj.cityList[2].population).toBe(721043);

    
    console.log(" Test 9");
    expect(obj.showInfo(2)).toBe( `2 Hamilton 43.256101 -79.857484 721043`);
    
    console.log("Test 10")
    obj.deleteCity(2)
    expect(obj.cityList.length).toBe(4);
    
 
   
});
