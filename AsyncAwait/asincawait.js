function task() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task completed")
        }, 2000);
    })
}
async function runTask() {
    let res = await task()
    console.log(res);
    
}
runTask();
