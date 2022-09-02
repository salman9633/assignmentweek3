var rl = require('readline-sync');

class Area {
    circle() {
        let radius = Number(rl.question("Enter the radius of the circle: "));
        const PI = 3.14;
        return PI * radius * radius;
    }

    square() {
        let length = Number(rl.question("Enter the length of the square: "));
        return length * length;
    }

    rectangle() {
        let width = Number(rl.question("Enter the width of the rectangle: "));
        let height = Number(rl.question("Enter the height of the rectangle: "));
        return width * height;
    }

    triangle() {
        let base = Number(rl.question("Enter the breadth of the triangle: "));
        let height = Number(rl.question("Enter the height of the triangle: "));
        return (base * height) / 2;
    }
}

class MainClass extends Area {
    main() {
        var area = new Area();
        console.log("1:Circle \n2:Square \n3:Rectangle \n4:Triangle");
        let choice = parseInt(rl.question("Enter your choice: "));
        let areas;
        switch (choice) {
            case 1: areas = area.circle();
                break;
            case 2: areas = area.square();
                break;
            case 3: areas = area.rectangle();
                break;
            case 4: areas = area.triangle();
                break;
            default: console.log("Enter correct choice");
        }
        if (typeof areas !== 'undefined') {
            console.log("Area = " + areas);
        }
    }
}

var Mainclass = new MainClass();
Mainclass.main();