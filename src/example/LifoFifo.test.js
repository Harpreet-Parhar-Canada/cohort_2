
import LifoFifo from './LIFOFIFO';
test('Testing the LifoFifo Class', () => {
    console.log("Testing for constructor");
    const obj =  new LifoFifo();
    expect(obj.arr.length).toBe(0);
    
    console.log("Testing for Insertion method");
    obj.insertion("Ian");
    expect(obj.arr.length).toBe(1);
    obj.insertion("Harpreet");
    expect(obj.arr.length).toBe(2);
    obj.insertion("Alex");
    expect(obj.arr.length).toBe(3);
    obj.insertion("Dima");
    expect(obj.arr.length).toBe(4);
    obj.insertion("Eva");
    expect(obj.arr.length).toBe(5);
    obj.insertion("Shane");
    expect(obj.arr.length).toBe(6);
    // console.log(obj.arr);
   
    console.log("Testing for delFifo method");
    obj.delFifo();
    expect(obj.arr.length).toBe(5);
    // console.log(obj.arr);
    obj.delFifo();
    expect(obj.arr.length).toBe(4);
    // console.log(obj.arr);

    console.log('Test Insertion method after using delFifo');
    obj.insertion('Luis');
    expect(obj.arr.length).toBe(5);
    // console.log(obj.arr);

    console.log("Testing for delLifo method");
    obj.delLifo();
    expect(obj.arr.length).toBe(4);
    obj.delLifo();
    expect(obj.arr.length).toBe(3);
    // console.log(obj.arr);

    console.log('Test Insertion method after using delLifo');
    obj.insertion('Harpreet');
    expect(obj.arr.length).toBe(4);
    obj.insertion('Ian');
    expect(obj.arr.length).toBe(5);
    console.log(obj.arr);
});