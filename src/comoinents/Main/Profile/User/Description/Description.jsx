import Info from './Info/Info'
import Class from './Description.module.css'

function Description() {
    return (
        <div className={Class.description}>
            <h1 className={Class.name}>Alex Circov</h1>
            <Info />
        </div>
    )
}

export default Description