import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


const New = ({
    news,
    onChange
}) => {
    const onCardClick = () => {
        onChange && onChange(news);
    }
    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    Live From Space
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Mac Miller
                </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="/static/images/cards/live-from-space.jpg"
                alt="Live from space album cover"
            />
        </Card>
    )
}


export const NewsList= ({ news }) =>{
    // const navigate = useNavigate();
    // const onNewsClick = ( {} ) => {
    //     navigate(``)
    // }

    return news.map((element, index) => {
        return <New 
            key = { index }
            new = { element }
            // onChange = { onNewsClick }
        />
    })
}

export default New;