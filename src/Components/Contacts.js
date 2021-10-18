import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { autocompleteClasses } from '@mui/material';

export default function Contacts(contacts){
    return(
        <Box sx={{mx:autocompleteClasses, width: "80%"}}>
            {contacts.contacts.map((element) => {
                <Stack direction="column">
                    <Card>
                        <CardMedia
                        component="img"sx={{ width: "15vw", display: "inline-flex", mx: "auto" }}
                        image={element?.profileImage}
                        alt="profile pic"
                        />
                        <CardContent>
                            {element.firstName}<br/>
                            {element.lastName}<br/>
                            {element.birthday}<br/>
                        </CardContent>
                    </Card>
                </Stack>
                
            })}
        </Box>
    )

}