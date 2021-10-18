import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { autocompleteClasses } from '@mui/material';


export default function Home(contactProfiles, articles){



    const myProfile= {
        firstName: "Homer",
        lastName: "Simpson",
        birthday: "06/24/1962 00:00:00",
        profileImage: "https://simpsons.fandom.com/wiki/Homer_Simpson/Gallery?file=180px-Donut_Head_Homer.jpg"

    }



    return(
        <Box sx={{mx:autocompleteClasses, width: "100%"}}>
            <Card className = "side-bar">
                <CardMedia component="img" sx={{ width: "15vw", display: "inline-flex", mx: "auto" }}
                    image={myProfile?.profileImage}
                    alt="donut Homer"
                />
                <CardContent>
                    <h5>Name: {myProfile.firstName} {myProfile.lastName}</h5>
                    <h5>Birthday: {myProfile.birthday}</h5>
                </CardContent>
            </Card>
            <Card className = "side-bar">
                <CardContent>
                    <h5><ul>{articles.map((element,index) => (<li>{element?.title}</li>))}</ul></h5>
                </CardContent>
            </Card>

        </Box>
    )

}