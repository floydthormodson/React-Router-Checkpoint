import './App.css';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Home from './Components/Home.js';
import About from './Components/About.js';
import ProfileList from './Components/ProfileList.js';
import Contacts from './Components/Contacts'


function App() {

  const buttonStyle = { width: 150, backgroundColor: "green" };


  const profileContent = { newsArticles:[
    { 
        title: "Local Billionaire Blocks Out Sun",
        article: "Words"
    },
    { 
        title: "New Food Critic on the Rise",
        article: "Words2"
    },
    { 
        title: "Rambunctious Youngster to jump Springfield Gorge tomorrow after 4pm",
        article: "Words3"
    }            
],
contactProfiles: [
    {
        firstName: "Mr.",
        lastName: "Snrub",
        birthday: "09/15/1886 00:00:00",
        profileImage: "https://static.wikia.nocookie.net/simpsons/images/5/5e/Snrub.jpg/revision/latest?cb=20140416021517"
    },
    {
        firstName: "Willie",
        lastName: "MacDougal",
        birthday: "09/15/1886 00:00:00",
        profileImage: "https://simpsons.fandom.com/wiki/William_MacDougal/Gallery?file=Willieismad.jpg"
    }
]};



  return (
    <div className="container">
      <div className = "nav-bar">
        <Stack spacing={0.5} direction="row" margin="auto">
          <Link to="/about"><Button variant="contained" sx={buttonStyle}>About</Button></Link>
          <Link to="/profiles"><Button variant="contained" sx={buttonStyle}>Profiles</Button></Link>
          <Link to="/"><Button variant="contained" sx={buttonStyle}>Home</Button></Link>
        </Stack>
      </div>
      <div className = "side-bar">
            <Route path="/" render={(props) => (<Contacts {...props} contacts={profileContent?.contactProfiles}/>)}/>
      </div>
      <div className="main-display">
          <Route exact path="/" render={(props) => (<Home {...props} articles={profileContent?.newsArticles} />)}/>
          <Route path="/about" render={(props) => (<About {...props}/>)}/>
          <Route path="/profile" render={(props) => (<ProfileList {...props}/>)}/>
          
      </div>
    </div>
  );
}

export default App;
