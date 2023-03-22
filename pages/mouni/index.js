import Head from "next/head";
import styles from '../../styles/Mouni.module.css'
import Link from "next/link";
export const getStaticProps=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/users')
  const data=await res.json()

  return {
    props:{mounies:data}
  }
}

const Mounies = ({mounies}) => {
  return (
    <>
      <Head>
        <title>Mouni List | List</title>
        <meta name="keywords" content="mouni" />
      </Head>
      <div>
        <h1>All Mounies</h1>
        {mounies.map((mouni) => (
          <Link href={'/mouni/' + mouni.id} key={mouni.id} className={styles.single}>
            
              <h3>{mouni.name}</h3>
        
          </Link>
        ))}
      </div>
    </>
  );
};

export default Mounies;
