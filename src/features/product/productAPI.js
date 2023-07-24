// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise( async (resolve) => {
    const res = await fetch('http://localhost:8080/products')
    const data = await res.json()
    resolve({data})
  }
  );
}

export function fetchProductsByFilters(filter) {
  //filter = {"category": ["smartphone", "laptops"]}
  //sort = {_sort:"price", _order="desc"}
  let queryString = '';
  for(let key in filter){
    queryString += `${key}=${filter[key]}&`
  }
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data = await response.json()
    resolve({data})
  } )
}