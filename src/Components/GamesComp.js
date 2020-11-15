import React from 'react';
import '../Styles/GamesComp.css';
import SimpleImageSlider from "react-simple-image-slider";
import { Avatar, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

function GamesComp() {

    const bannerImages = [
        { url: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/119057724_1813301922151522_1441062140613171334_n.jpg?_nc_cat=110&ccb=2&_nc_sid=e3f864&_nc_ohc=lUFJ0g8SM9UAX_05y7E&_nc_ht=scontent.ftpa1-1.fna&oh=fdf90482014b2fbf156bc331a18437e2&oe=5FCF4B66" },
        { url: "https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/118600705_3593736924021339_169135518286554133_n.png?_nc_cat=111&ccb=2&_nc_sid=e3f864&_nc_ohc=eqPL_-26z0AAX94gl1S&_nc_ht=scontent.ftpa1-2.fna&oh=32803300777d0d3836a287d03a3f8390&oe=5FCEEEED" },
        { url: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/s960x960/123916987_691126595144337_6418072309367551342_o.jpg?_nc_cat=109&ccb=2&_nc_sid=e3f864&_nc_ohc=jhxxSc6hlmQAX9PsoVs&_nc_ht=scontent.ftpa1-1.fna&tp=7&oh=2a5d1d81f2c7fa4a5d9114e5a974564b&oe=5FD1094A" } 
    ];

    const items = [{url:"https://scontent.ftpa1-1.fna.fbcdn.net/v/t15.5256-10/p180x540/118406694_461426978156797_5168240304012766026_n.jpg?_nc_cat=107&ccb=2&_nc_sid=ad6a45&_nc_ohc=OybdRAxR7pMAX_n2hlC&_nc_ht=scontent.ftpa1-1.fna&oh=28078745d531fb0b59b9aa5cba8a9290&oe=5FCED985", name: "Fifa 21"},
    {url:"https://scontent.ftpa1-1.fna.fbcdn.net/v/t15.13418-10/p180x540/119899496_379508436578925_4148630395374148929_n.jpg?_nc_cat=108&ccb=2&_nc_sid=ad6a45&_nc_ohc=cXgDYMQ61BQAX9G3Nn0&_nc_ht=scontent.ftpa1-1.fna&oh=b3a0d39e3b3fef215ffc81851a483176&oe=5FCE17C9", name: "GT Racing"},
    {url:"https://scontent.ftpa1-2.fna.fbcdn.net/v/t15.5256-10/p180x540/119120672_375541153564690_3747379908511225629_n.jpg?_nc_cat=1&ccb=2&_nc_sid=ad6a45&_nc_ohc=A370-V_Pq2oAX8KXS32&_nc_ht=scontent.ftpa1-2.fna&oh=38680f5b20234e6f8b8359109eab2c34&oe=5FCEE3BA", name: "Clip: Z+Doc Triple Threat Challenge | 5.97KD 580+ Wins |"},
    {url:"https://scontent.ftpa1-2.fna.fbcdn.net/v/t15.13418-10/p180x540/120917740_423496288643975_5831422849586483728_n.jpg?_nc_cat=111&ccb=2&_nc_sid=ad6a45&_nc_ohc=fTmiCYPZTH4AX9iEye2&_nc_ht=scontent.ftpa1-2.fna&oh=9458c4cebe0491268b63e8c57996c7e6&oe=5FCF2149", name: "Catching Wanted Criminals - GTA 5 Roleplay!"},
    ]

    const itemssmall = [{url:"https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.14241-6/32888942_177753943057583_5166801083917402112_n.jpg?_nc_cat=1&ccb=2&_nc_sid=7317c6&_nc_ohc=tikRK07WRHUAX9FAN8R&_nc_ht=scontent.ftpa1-2.fna&oh=169327188e26b055379fc51284c98bda&oe=5FD12E60", name: "PUBG Mobile"},
    {url:"https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.14241-6/55955058_310089289660656_3976448140461998080_n.jpg?_nc_cat=1&ccb=2&_nc_sid=7317c6&_nc_ohc=JHA66ygiRfkAX9oeN8o&_nc_ht=scontent.ftpa1-2.fna&oh=6f8a930065908585c33b75309b291431&oe=5FD05C3F", name: "Mobile Legends"},
    {url:"https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.14241-6/81222782_2262569657317002_7818166829045514240_n.jpg?_nc_cat=1&ccb=2&_nc_sid=7317c6&_nc_ohc=TzjM633GrycAX9Mk7bV&_nc_ht=scontent.ftpa1-2.fna&oh=b0fe7fa555b2d038240457282d15c551&oe=5FCF0F3A", name: "Free Fire - Battlegrounds"},
    {url:"https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.14241-6/22810705_140251603396086_3943215813829328896_n.jpg?_nc_cat=1&ccb=2&_nc_sid=7317c6&_nc_ohc=G9x3LmRir4wAX9aPYrl&_nc_ht=scontent.ftpa1-2.fna&oh=2f0c5059d07c60d3905add922f8297fc&oe=5FD00F51", name: "GTA V"},
    {url:"https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.14241-6/22810550_1708608555858800_4457172632923537408_n.jpg?_nc_cat=1&ccb=2&_nc_sid=7317c6&_nc_ohc=jIRbt8D62McAX9e7OiE&_nc_ht=scontent.ftpa1-2.fna&oh=11da48af079f6154b6d5891a32aadcfc&oe=5FD16E7A", name: "DOTA 2"},
    {url:"https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.14241-6/69684739_700559390459544_7649251700938637312_n.jpg?_nc_cat=1&ccb=2&_nc_sid=7317c6&_nc_ohc=VjU1OKcELXQAX9MScBC&_nc_ht=scontent.ftpa1-2.fna&oh=0d9728fbc197d472ab57e20d0b9c861d&oe=5FCEEA81", name: "COD Modern Warfare"},
    {url:"https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.14241-6/23803411_169069533687402_7730873036093521920_n.jpg?_nc_cat=1&ccb=2&_nc_sid=7317c6&_nc_ohc=2wMRmDeHlAQAX-vLHJD&_nc_oc=AQmMd16qWM7Of4HaIGvjlVloyZhoqDvw8z2tDGBn1tDhGrGAzq_9mHkA6Aru1Q98jDueB7zCIDPugiKBhd_OZLND&_nc_ht=scontent.ftpa1-2.fna&oh=65a52156d54dbcb44e700052c514b86d&oe=5FD0922C", name: "Euro Truck Simulator 2"},
    {url:"https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.14241-6/22080793_179554855937934_6372740429330251776_n.jpg?_nc_cat=1&ccb=2&_nc_sid=7317c6&_nc_ohc=FyZJ-HHUYXUAX96sXYf&_nc_ht=scontent.ftpa1-2.fna&oh=340ae4302c171d5d860388a529950ec8&oe=5FD1B6F7", name: "League of Legends"},
    {url:"https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.14241-6/46675422_183078902641653_1498615811579838464_n.jpg?_nc_cat=1&ccb=2&_nc_sid=7317c6&_nc_ohc=HG4cks9fjOMAX_ZsnAG&_nc_ht=scontent.ftpa1-2.fna&oh=00fc64b2c4e53cace5b3f73f3b8ff620&oe=5FCDF651", name: "Age of Empires"},
    
    ]
    
    return (
        <div className = "games">
            <div className = "banner">
                <SimpleImageSlider
                    width={1220}
                    height={504}
                    images={bannerImages}
                />
            </div>
            <h1 className = 'margin-top'>Suggested live now</h1>
            <div className = "rowbig"> 
            {
                items.map(item => (
                    <div className = "rowbig_row"><img src = {item.url} className = "rowbig_img" />
                   <div className = "text"><Avatar></Avatar>
                    <p>{item.name}</p></div></div>
                ))
            }
            </div>
            <h1>Popular Games</h1>
            <div className = "rowsmall"> 
            {
                itemssmall.map(item => (
                    <Card className="rowsmall_row">
                        <CardActionArea>
                            <CardMedia
                            className="rowsmall_img"
                            image={item.url}
                            title={item.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Follow
                            </Button>
                        </CardActions>
                    </Card>
                ))
            }
            </div>
        </div>
    )
}

export default GamesComp;