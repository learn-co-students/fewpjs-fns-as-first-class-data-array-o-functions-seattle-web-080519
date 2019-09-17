const wakeDog = (dogName, dogBreed) => {
    // console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
}

const leashDog = (dogName, dogBreed) => {
    return `Leash ${dogName} the ${dogBreed}`
}

const walkToPark = (dogName, dogBreed) => {
    return `Walk to the park with ${dogName} the ${dogBreed}`
}

const throwFrisbee = (dogName, dogBreed) => {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

const walkHome = (dogName, dogBreed) => {
    return `Walk home with ${dogName} the ${dogBreed}`
}

const unleashDog = (dogName, dogBreed) => {
    return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    // console.log(routine);
    let returnArray = [];

    for (let activity of routine) {
        // console.log(eachFn);
        returnArray.push(activity(dogName, dogBreed));
    }
    return returnArray
}