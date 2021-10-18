import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { autocompleteClasses } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';

export default function Home(props){

    console.log("inside Home Component:", props);
    

    return(
        <Stack direction="row" sx={{mx:autocompleteClasses, width: "100%"}}>
            <Card>
                <CardContent>
                    <h2>Your Contacts</h2>
                </CardContent>
            {props.contacts.map((element) => (
                    <Card sx={{mx:1}}>
                        <CardMedia
                        component="img"sx={{ width: "15vw", display: "inline-flex", mx: "auto" }}
                        image={element?.profileImage}
                        alt="profile pic"
                        />
                        <CardContent>
                            {element?.firstName}<br/>
                            {element?.lastName}<br/>
                        </CardContent>
                    </Card>
                
            ))};
            </Card>
            <Card >
                <CardContent>
                    <h2>Your News</h2>
                    <h3><ul>{props.articles.map((element,index) => (<li key={index}>{element.title}<h5>{element.article}</h5></li>))}</ul></h3>
                </CardContent>
            </Card>
        </Stack>
    )
}