import './App.css';
import React from 'react';
import {Route, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Home from './Components/Home.js';
import About from './Components/About.js';
import ProfileList from './Components/ProfileList.js';




function App() {

  const buttonStyle = { width: 150, backgroundColor: "yellow", color: "black" };


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
    },
    {
      firstName: "Homer",
      lastName: "Simpson",
      birthday: "09/15/1886 00:00:00",
      profileImage: "https://upload.wikimedia.org/wikipedia/en/f/fb/Homers_Barbershop_Quartet.PNG"
  },
  {
    firstName: "Frank",
    lastName: "Grimes",
    birthday: "09/15/1886 00:00:00",
    profileImage: "https://www.seekpng.com/ima/u2q8w7y3y3e6o0i1/"
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
      <div className="main-display">
          <Route exact path="/" render={(props) => (<Home articles={profileContent?.newsArticles} contacts={profileContent?.contactProfiles}/>)}/>
          <Route path="/about" render={(props) => (<About/>)}/>
          <Route path="/profiles" render={(props) => (<ProfileList profiles={profileContent?.contactProfiles}/>)}/>
          
      </div>
    </div>
  );
}

export default App;
