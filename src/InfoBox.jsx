import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL=
        "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let HOT_URL="https://g4.img-dpreview.com/C583B30B6CB9494FACB7C64B2EDBA751.jpg";
    let COLD_URL="https://th.bing.com/th/id/OIP.vwoQHA1pn1ssNfEvxHyzIQHaEK?rs=1&pid=ImgDetMain";
    let RAIN_URL="https://th.bing.com/th/id/OIP.lz8HEPcQ-GfXUoSdV6O3VAHaEo?rs=1&pid=ImgDetMain";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80?RAIN_URL:(info.temp>15?HOT_URL:COLD_URL)}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                info.humidity>80?<ThunderstormIcon/>:(info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>)
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>
                                Temperature={info.temp}&deg;C
                            </p>
                            <p>
                                Humidity={info.humidity}
                            </p>
                            <p>
                                Min Temp={info.tempMin}&deg;C
                            </p>
                            <p>
                                MaxTemp={info.tempMax}&deg;C
                            </p>
                            <p>
                                The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}