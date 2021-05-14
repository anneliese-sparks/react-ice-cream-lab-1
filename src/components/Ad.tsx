import { addListener } from 'process';
import Ad from '../models/Ad';
import './Ad.css'


interface Props {
    ad: Ad 
}

function AdDisplay({ad}: Props) {
    const style: any = {
        fontSize: ad.fontSize,
    };
    if (ad.darkTheme) {
        style.backgroundColor = "black";
        style.color = "white";
    }


return (

    
                <div className={"AdDisplay__ad"} style={style}>
                    <p>Vote For</p>
                    <p style={style}>{ad.flavor}</p>
                </div>
    
)
}
export default AdDisplay;