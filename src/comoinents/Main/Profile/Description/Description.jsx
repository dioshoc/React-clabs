import Info from './Info/Info'
import Class from './Description.module.css'

function Description() {
    return (
        <div className={Class.main}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/3802/3802095.svg" alt="" className={Class.img} />
            <div className={Class.description}>
                <h1 className={Class.name}>Alex Circov</h1>
                <Info />
            </div>
        </div>
    )
}

export default Description