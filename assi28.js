function car(name, mileage, max_speed) {
    this.name = name;
    this.mileage = mileage;
    this.max_speed = max_speed;
}

const car1 = new car("bugati", 15, 290);

console.log(car1);