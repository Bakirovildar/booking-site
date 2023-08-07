import './Main.css'
import {MainLink} from "./MainLink/MainLink";
import {MainImage} from "./MainImage/MainImage";

export const Main = () => {
    return (
        <div className='main-container'>
            <MainLink/>
            <MainImage/>
        </div>
    )
}
