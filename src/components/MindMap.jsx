
import { useState, useCallback } from 'react';
import ReactFlow from 'react-flow-renderer';
import {
    useNodesState,
    useEdgesState,
    useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import PopUp from './PopUp';
import initialEdges, { initialNodes } from '../../public/Nodes-Edges';



const getLayoutedElements = (nodes, edges) => {
    return { nodes, edges };
};

export default function MindMap() {
    const [hoveredNode, setHoveredNode] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [clickedNode, setClickedNode] = useState(null);


    const { fitView } = useReactFlow();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

    const onLayout = useCallback(() => {
        const layouted = getLayoutedElements(nodes, edges);

        setNodes([...layouted.nodes]);
        setEdges([...layouted.edges]);

        window.requestAnimationFrame(() => {
            fitView();
        });
    }, [nodes, edges]);

    const onNodeMouseEnter = (event, node) => {
        setHoveredNode(node.id);
    };

    const onNodeMouseLeave = () => {
        setHoveredNode(null);
    };
    const onNodeClick = (event, node) => {
        setHoveredNode(null);
        setClickedNode(node);
        setIsPopupOpen(true);
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setClickedNode(null);
        const body = document.querySelector('body');
        body.style.overflow = '';
    }


    const popupStyle = (node) => ({
        position: 'absolute',
        left: node.position.x <= 200 ? node.position.x + 400 : node.position.x - 120,
        top: node.position.y === 800 ? node.position.y - 200 : node.position.y,
        transform: 'translateX(-50%)',
        backgroundColor: '#ccc',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        zIndex: 10,
        cursor: 'default',
        height: '270px',
        width: '300px',
    });


    return (
        <div id="mindMapContainer" style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                preventScrolling={false}
                zoomOnScroll={false}
                onNodeMouseEnter={onNodeMouseEnter}
                onNodeMouseLeave={onNodeMouseLeave}
                onNodeClick={onNodeClick}
                zoomOnPinch={false}

                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
            >

                {initialNodes.map((node) => (
                    <div key={node.id} >
                        {node.id === hoveredNode && (
                            <div style={popupStyle(node)}>
                                <p className='text-2xl font-medium mb-5' >{node.data.label}:-</p>

                                <div className='flex items-center mb-4'>
                                    <p className='text-[13px] absolute left-[28%]'>0</p>
                                    <p className='text-[13px] absolute left-[40%]'>5000</p>
                                    <p className='text-[13px] absolute left-[62%]'>10000</p>

                                </div>
                                <div className='flex items-center mb-3'>

                                    <p className='text-[13px] '>Positive</p>
                                    <div className="bg-blue-500 text-white py-2 text-center ml-1 absolute left-[80px]" style={{ width: '60%', height: "30px" }}></div>
                                    <p className='text-[13px] absolute left-[88%]'>13250</p>

                                </div>
                                <div className='flex items-center mb-3'>

                                    <p className='text-[13px] '>Negative</p>
                                    <div className="bg-blue-500 text-white py-2 text-center ml-1 absolute left-[80px]" style={{ width: '50%', height: "30px" }}></div>
                                    <p className='text-[13px] absolute left-[78%]'>112350</p>

                                </div>
                                <div className='flex items-center mb-3'>

                                    <p className='text-[13px]'>Comments</p>
                                    <div className="bg-blue-500 text-white py-2 text-center ml-1 absolute left-[80px]" style={{ width: '40%', height: "30px" }}></div>
                                    <p className='text-[13px] absolute left-[68%]'>10250</p>

                                </div>

                                <p> Total reviews</p>
                                <p> Positive reviews</p>
                                <p>Negative reviews </p>
                                <p>Comments</p>
                            </div>
                        )}

                    </div>
                ))
                }
            </ReactFlow>
            {
                isPopupOpen && clickedNode && <PopUp isOpen={isPopupOpen} onClose={closePopup} node={clickedNode} />
            }


        </div>
    );
}

