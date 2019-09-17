function wakeDog(dog, breed){
//    console.log(`Wake ${dog} the ${breed}`)
   return `Wake ${dog} the ${breed}`
}
function leashDog(dog, breed){
    // console.log(`Leash ${dog} the ${breed}`)
   return `Leash ${dog} the ${breed}`
}
function walkToPark(dog, breed){
    // console.log(`Walk to the park with ${dog} the ${breed}`)
   return `Walk to the park with ${dog} the ${breed}`
}
function throwFrisbee(dog, breed){
    // console.log(`Walk to the park with ${dog} the ${breed}`)
   return `Throw the frisbee for ${dog} the ${breed}`
}
function walkHome(dog, breed){
    // console.log(`Walk to the park with ${dog} the ${breed}`)
   return `Walk home with ${dog} the ${breed}`
}
function unleashDog(dog, breed){
    // console.log(`Walk to the park with ${dog} the ${breed}`)
   return `Unleash ${dog} the ${breed}`
}
const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];
function exerciseDog(dog, breed){
    return routine.map(fn => fn(dog, breed))
}