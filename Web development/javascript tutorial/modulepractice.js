//this is a module im making to practice ES6 module importation

//math modules:


//export function allows us to import the module further on and later on
export const pi=3.14159265

export function circumference(radius){
    return 2 * pi * radius;
}

export function area(radius){
    return pi * radius * radius;
}

export function volume(radius){
    return 4 * pi * radius * radius;
}