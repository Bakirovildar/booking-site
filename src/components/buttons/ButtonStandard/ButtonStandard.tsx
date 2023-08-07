import './ButtonStandard.css'

interface IButtonStandard {
    title: string
    clickButtonStandard: () => void
}

export const ButtonStandard = ({title, clickButtonStandard}: IButtonStandard) => {
    return (
        <div
            onClick={clickButtonStandard}
            className='button-standard'>
            {title}
        </div>
    )
}
