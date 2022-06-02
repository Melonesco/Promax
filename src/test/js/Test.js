
import './Test.css'

function Test() {
    return(
        <>
            <div className={'block'}>
                <div className={'block__inner'}>
                    <div className={'block__image'}>Image</div>
                    <div className={'block__info'}>
                        <h2>Content</h2>
                        <ul>
                            <li>Name</li>
                            <li>City</li>
                            <li>Age</li>
                            <li>Status</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Test;