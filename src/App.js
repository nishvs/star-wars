import React, { useState, useEffect} from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';
import Planet from './components/Planet';

const fetchData = async (url) => {
  let res = await fetch(url)
  return await res.json();
}

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    async function fetchPlanets(){      
      let data = await fetchData('https://swapi.dev/api/planets/?format=json')
      let fulldata = data.results;
      while(data.next != null){
        console.log(`next call ${data.next}`)
        let newData =  await fetchData(data.next)
        fulldata = data.results.concat(newData.results)
        data = newData  
      }
      setPlanets(fulldata);
      console.log(fulldata)
    }
    fetchPlanets();
    setLoading(false);
  },[])
  return (
    <div>
      <Router>
        <Navbar/>
        <Container>
          {loading?(
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ):(
            <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/people">
              <People data={people}/>
            </Route>
            <Route exact path="/planets">
              <Planet data={planets}/>
            </Route>
          </Switch>
          )}
        </Container>

      </Router>
    </div>
  );
}

export default App;
