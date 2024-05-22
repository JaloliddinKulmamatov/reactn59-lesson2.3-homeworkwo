export async function fetchData(api,mainFunc,loading) {
    let data = await fetch(api)
    data 
    .json()
    .then(res => mainFunc(res))
    .catch(err => console.log(err))
    .finally(() => {
        loading.style.display = "none"
    });
}