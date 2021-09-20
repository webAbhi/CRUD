import 'antd/dist/antd.css';
import './heading.css';

const Heading = ({text}) => {
    return (
        <div>
            <h2 className = "main">{text}</h2>
        </div>
    )
}

export default Heading
