import { useLocation } from 'react-router-dom';

function Chartpage() {
  const location = useLocation();

  //get data which is passed from dashboard
  //const { id, data } = location.state;
  const {id} = location.state;

  return <pre>{JSON.stringify(id, null, 2)}</pre>;

  // return(
  //   <p>{id}</p>
  // );

  
}
export default Chartpage;
