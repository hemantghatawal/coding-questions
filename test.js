// Write a function makeTimer() that returns a function which, each time it's called, logs how much time has passed since makeTimer() was first called. (Concept only — this is literally how simple animation loops track elapsed time.)

function makeTimer(){
    const timer = Date.now()
    
    return function (){
        let elapsed = Date.now() - timer
        console.log(elapsed)
        return elapsed
    }
}

const timer = makeTimer()
timer()
timer()