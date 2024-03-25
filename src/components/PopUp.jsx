import Popup from 'reactjs-popup';
import './MindMap.css';
import nodeData from '../../public/data.jsx';

const PopUp = ({ node, isOpen, onClose }) => {

    return (
        <Popup open={isOpen} onClose={onClose} modal nested>
            {
                <div className="popup-overlay ">
                    <div className="popup">
                        <div className='flex justify-end'>

                            <button className='bg-white' onClick={onClose}>
                                <i className="fa-solid fa-xmark" ></i>
                            </button>
                        </div>
                        <h2 className='lg:text-5xl font-semibold mb-10 text-3xl'>{node.data.label}</h2>
                        <div className="overview font-serif mb-16">
                            <p className='lg:text-4xl mb-4 text-3xl font-medium'>Overview</p>
                            <p className='lg:text-2xl font-medium text-.5xl'>{nodeData[node.id].Overview}</p>
                        </div>
                        <div className="overview font-serif mb-16">
                            <p className='lg:text-4xl mb-4 text-3xl font-medium'>Functionality</p>
                            <p className='lg:text-2xl font-medium text-.5xl'>{nodeData[node.id].Functionality}</p>
                        </div>
                    </div>
                </div>
            }
        </Popup>
    );

}

export default PopUp
