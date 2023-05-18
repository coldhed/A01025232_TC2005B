const result_p = document.getElementById('fetch_result')

const request_result = await fetch('api/hello')

console.log(request_result)