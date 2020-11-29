import Class from './Info.module.css'

function Info() {
    return (
        <div className={Class.info}>
            <div className={Class.color}>Color: Red</div>
            <div className={Class.type}>Type: Turtle</div>
        </div>
    )
}

export default Info