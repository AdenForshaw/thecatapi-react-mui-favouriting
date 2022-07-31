import { Box, CircularProgress, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import Image from './Image';

const Feed = () => {

    const [images, setImages] = React.useState([]);

    async function refreshImages()
    {
        setImages([])

        try{

            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1',{
                headers:{
                    "content-type":"application/json",
                    'x-api-key': process.env.REACT_APP_CAT_API_KEY
                }
            });
            const json = await response.json();
            setImages(json);
        
        }catch(e){
            console.log(e)
        }

    }

    useEffect(() => {
        refreshImages();
    }, [])

    return (
        <>
        <Grid container columns={{xs:4 , sm:8, md:12}}>
        {
            images && images.map(image => (
                <Grid item key={image.id} xs={2} sm={4} md={4}>
                <Image data={image} key={image.id}/>
                </Grid>
            ))
        }
        </Grid>
        <Box textAlign={'center'}>
            {images.length === 0 && <CircularProgress/>}
        </Box>
        </>
    );
}

export default Feed;