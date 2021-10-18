import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { autocompleteClasses } from '@mui/material';


export default function Home(articles){

    console.log('inside Home component:', articles)

    return(
        <Box sx={{mx:autocompleteClasses, width: "80%"}}>
            <Card className = "side-bar">
                <CardContent>
                    <h2>Your News</h2>
                    <h3><ul>{articles.articles.map((element,index) => (<li key={index}>{element.title}<h5>{element.article}</h5></li>))}</ul></h3>
                </CardContent>
            </Card>
        </Box>
    )
}