
import Class from './Production.module.css'

function Production() {
    return (
        <div className={Class.production}>
            <h1 className={Class.title}>My posts</h1>
            <textarea className={Class.input}></textarea>
            <a href="#" className={Class.btn}>Send</a>
        </div>
    )
}

export default Production