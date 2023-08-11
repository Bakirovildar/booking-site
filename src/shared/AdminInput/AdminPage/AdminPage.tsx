import './AdminPage.css'
import {ListCard} from "./ListCard/ListCard";

export const AdminPage = () => {
    return (
        <div className='admin-container'>
            <ListCard masterDates={[]}/>
        </div>
    )
}
