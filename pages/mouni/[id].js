export const getStatcPaths=async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths=data.map(mouni=>{
    return {
      params:{id: mounies.id.toString()}
    }
  })

return {
  paths,
  fallback:false
}
}

const Details=()=> {

  return (
    <div>
        <h1>Details Page</h1>
    </div>
  )
}

export default Details;