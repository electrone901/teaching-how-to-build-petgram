import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import Home from './components/home-container/home/Home'
import PetDetails from './components/home-container/pet-details/PetDetails'
import CreatePet from './components/create-post/CreatePet'

function App() {
  return (
    <Router>
    <div className="cl">
      <Navbar account={account} connectWallet={connectWallet} />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route exact path="/create-pet" component={CreatePet} />
        <Route path="/pet-details/:petId">
          <PetDetails account={account} contractData={contractData} />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>
  )
}

export default App
