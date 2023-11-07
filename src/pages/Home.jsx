import React,{Fragment} from 'react'
import { useQuery, gql } from '@apollo/client';

const querry=gql`
  query gettodoswithuser{
    getTodos{
      id
      title
      completed
      user{
        id
        name
      }
    }
  }`
const Home = () => {
  
  const { data, loading } = useQuery(querry);

  if (loading) return <h1>Loading...</h1>;
  return (
    
    <Fragment>
       <div className="App">
      <table>
        <tbody>
          {data.getTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo?.user?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Fragment>
  )
}

export default Home