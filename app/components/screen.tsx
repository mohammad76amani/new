import React, { useRef } from 'react'
import Draggable, { DraggableData } from 'react-draggable'

interface SubMenu1Props {
    selectedButton: any[];
}

export const Screen: React.FC<SubMenu1Props> = ({ selectedButton }) => {
    const nodeRef = useRef<HTMLDivElement>(null);
    const screenRef = useRef<HTMLDivElement>(null);

    const handleDrag = (_e: React.DragEvent, data: DraggableData) => {
        if (screenRef.current) {
            const bounds = screenRef.current.getBoundingClientRect();
            const buttonBounds = nodeRef.current?.getBoundingClientRect();
            
            if (buttonBounds) {
                if (data.x < 0) data.x = 0;
                if (data.y < 0) data.y = 0;
                if (data.x + buttonBounds.width > bounds.width) {
                    data.x = bounds.width - buttonBounds.width;
                }
                if (data.y + buttonBounds.height > bounds.height) {
                    data.y = bounds.height - buttonBounds.height;
                }
            }
        }
    };
    return (
        <div ref={screenRef} className='w-2/3 min-h-[500px] ml-auto m-10 border shadow-sm relative'>
            <div className="w-full h-full absolute">
                {selectedButton.map((button, index) => (
                    <Draggable 
                        key={index} 
                        nodeRef={nodeRef}
                        bounds="parent"
                        defaultPosition={{x: 50 + (index * 20), y: 50 + (index * 20)}}
                        onDrag={(e, data) => handleDrag(e as unknown as React.DragEvent, data)}
                    >
                        <div ref={nodeRef} className="absolute cursor-move">
                            {React.createElement(button.component as React.ComponentType<any>, { 
                                ...button.defaultProps, 
                                classes: `${button.defaultProps.classes || ''} draggable`
                            })}
                        </div>
                    </Draggable>
                ))}            </div>
        </div>
    )
}
