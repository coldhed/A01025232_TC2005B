const response = await fetch('api/hello', {
    method:'GET'
})

if(response.ok)
{
    const message = await response.text()

    console.log(message)

    const resultDiv = document.getElementById('fetch_result')
    resultDiv.innerHTML = message
}
else
    console.log(`HTTP Error: ${response.status}`)


const params = new URLSearchParams({
    name:'Santiago',
    surname:'Rodríguez'
})

const response_parameters = await fetch('api/hello?' + params, {
    method:'GET',
})

if(response_parameters.ok)
{
    const message = await response_parameters.text()

    console.log(message)
    const resultDiv = document.getElementById('result_parameters')
    resultDiv.innerHTML = message
}
else
    console.log(`HTTP Error: ${response_parameters.status}`)

// const response_db = await fetch('api/users', {
//     method:'GET',
//     headers: 
//     {
//         'accept':'application/json'
//     }
// })

// if(response_db.ok)
// {
//     const results = await response_db.json()

//     console.log(results)
// }
// else
// {
//     console.log("Error")
// }

const response_json = await fetch('/api/json_test', {
    method:'GET',
})

if (response_json.ok)
{
    console.log("JSON content: ")
    const responseContent = await response_json.json()
    console.log(responseContent)
}
else
{
    console.log(`HTTP Error: ${response_json.status}`)
}