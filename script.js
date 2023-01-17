class Product {

    #id;
    #title;
    #manufacture;
    #price;

    constructor(title, manufacture, price) {
        this.#id = (Math.random() * 1000000).toFixed(0);
        this.title = title;
        this.manufacture = manufacture;
        this.price = price;

        this.Type = this.constructor.name;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }

    get manufacture() {
        return this.#manufacture;
    }

    set manufacture(value) {
        this.#manufacture = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        this.#price = value;
    }
}


class Milk extends Product {
    #fat;
    constructor(title, manufacture, price, fat) {
        super(title, manufacture, price);
        this.fat = fat;
    }

    get fat() {
        return this.#fat;
    }

    set fat(value) {
        this.#fat = value;
    }
}

class Chocolate extends Product {
    #kind;

    constructor(title, manufacture, price, kind) {
        super(title, manufacture, price);
        this.kind = kind;
    }

    get kind() {
        return this.#kind;
    }

    set kind(value) {
        this.#kind = value;
    }
}

class Wine extends Product {
    #alcohol;

    constructor(title, manufacture, price, alcohol) {
        super(title, manufacture, price);
        this.alcohol = alcohol;
    }

    get alcohol() {
        return this.#alcohol;
    }

    set alcohol(value) {
        this.#alcohol = value;
    }
}


class Store {
    constructor() {
        this.products = [];
    }

    add(product) {
        this.products.push(product);
    }
    getAll() {
        console.log(...this.products) ;
    }
    getByType(type){
        const result = this.products.filter(value => value.Type.toLowerCase() === type.toLowerCase());
        if(result.length===0){
            console.log('invalid type');
        }else{
            console.log(result);
        }
    }
}


const milk1 = new Milk('Kotej', 'Tara', 5.60, 3);
const milk2 = new Milk('Yellow cheese', 'Strauss', 20, 8);
const milk3 = new Milk('Milk', 'Tnuva', 4.80, 3);
const chocolate1 = new Chocolate('Swiss choko', 'Swiss cho.inc', 34, 'dark');
const wine1 = new Wine('Cabernet sauvignon', 'Tabor', 50, 30);
const wine2 = new Wine('Merlot', 'Galil wineries', 64, 15);


const store = new Store();
store.add(milk1);
store.add(milk2);
store.add(milk3);
store.add(chocolate1);
store.add(wine1);
store.add(wine2);

store.getAll();
console.log('==================================================');

store.getByType('wine');
store.getByType('ChocOlaTe');
store.getByType('sdfg');
