import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { autocompleteClasses } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Route, Link } from 'react-router-dom';
import {useState} from 'react';
{/*import Profile from "./Components/Profile"*/}

export default function ProfileList(props){

    const {currentProfile, setCurrentProfile} =useState();

    console.log("in ProfileList Component:", props.profiles)

    return(
        <div>
        <Stack direction="column" sx={{mx:5, width: "100%"}}>
            {props.profiles.map((element) => (
                    <Card sx={{mx:10, width: "20%"}}>
                        <CardMedia
                        component="img"sx={{ width: "15vw", display: "inline-flex", mx: "auto" }}
                        image={element?.profileImage}
                        alt="profile pic"
                        />
                        <CardContent>
                            {element?.firstName}<br/>
                            {element?.lastName}<br/>
                            {element?.birthday}<br/>
                            <Button><Link to="/profiles/:id">View</Link></Button>
                        </CardContent>
                    </Card>
                
            ))};
        </Stack>
        {/*<Stack>
            <Route path="profile/:id" render={(props) => (<Profile/>)}/>
        </Stack>*/}

        </div>
        
    )
}
    