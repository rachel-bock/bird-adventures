const requestOptions = {
  method: 'GET',
  headers: {
    "X-eBirdApiToken": `${process.env.REACT_APP_EBIRDAPI_KEY}`
  },
  redirect: 'follow'
};

export const getTopContributors = (yesterday) => {
  
  const url = `https://api.ebird.org/v2/product/top100/US-CO/2022/08/01`
  return fetch(url, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })
  .catch(error => console.log('error', error));
}

export const getSightings = () => {
  const url = 'https://api.ebird.org/v2/data/obs/US-CO/recent'
  return fetch(url, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(error => console.log('error', error));
}

// const myHeaders = new Headers();
// myHeaders.append("X-eBirdApiToken", apiKey);
//
// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };
//
// fetch("https://api.ebird.org/v2/data/obs/geo/recent?lat={{lat}}&lng={{lng}}&sort=species", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
