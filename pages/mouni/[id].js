export const getStaticPaths  = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map(mouni => {
    return {
      params: { id: mouni.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();
  
  return {
  props :{mouni:data}
}
};


const Details = ({mouni}) => {
  return (
    <div>
      <h1>{mouni.name}</h1>
      <p>{mouni.email}</p>
      <p>{mouni.website}</p>
      <p>{mouni.address.city}</p>
    </div>
  );
};

export default Details;
