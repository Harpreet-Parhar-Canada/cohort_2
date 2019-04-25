import City from './City.js';

test('Test the Account functions', () => {
	console.log('Test 1');
	const newCity = new City(0,'Calgary',51.083333,-114.083333,1110000);
	expect(newCity.id).toBe(0); 
	expect(newCity.name).toBe("Calgary");
	expect(newCity.lat).toBe(51.083333);
	expect(newCity.long).toBe(-114.083333);
	expect(newCity.population).toBe(1110000);
	
	console.log('Test 2');	
	expect(newCity.showCity()).toBe( `0 Calgary 51.083333 -114.083333 1110000`);
	
	console.log('Test 3 for moved In ');	
	expect(newCity.movedIn(1000)).toBe(1111000);
	
	console.log('Test 4 for moved out ');	
	expect(newCity.movedOut(5000)).toBe(1106000);

	console.log('Test 5 for how Big ');	
	expect(newCity.howBig()).toBe('City');
	
	console.log('Test 6 for how Big ');	
	expect(newCity.whichSphere()).toBe('North');
	
});
