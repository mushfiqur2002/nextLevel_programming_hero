class Name {
    name: string;
    type: string;
    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
}

class Animal {
    nameObj: Name;
    animalSound: string
    constructor(nameObj: Name) {
        this.nameObj = nameObj;
        this.animalSound = "";
    }

    setSound(sound: string) {
        this.animalSound = sound;
    }

    message() {
        console.log(`This animal is ${this.nameObj.type}, name is ${this.nameObj.name}. Makes sound: ${this.animalSound}`);
    }
}

// Usage
const catName = new Name('Mini', 'cat');
const cat = new Animal(catName);
cat.setSound('meow');
cat.message()
    ;

