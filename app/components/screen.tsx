import React, { useEffect, useRef, useState } from 'react'
import Draggable, { DraggableData } from 'react-draggable'

interface SubMenu1Props {
    selectedButton: any[];
    componentStyles: {}
    btnText: string
}

export const Screen: React.FC<SubMenu1Props> = ({ selectedButton, componentStyles, btnText }) => {
    const nodeRef = useRef<HTMLDivElement>(null);
    const screenRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [selectedComponent, setSelectedComponent] = useState<any>(null);
    const [componentProps, setComponentProps] = useState<any>(null);
    const [componentsStyles, setComponentsStyles] = useState<Record<number, React.CSSProperties>>({});

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

    const handleComponentClick = (index: number, button: any) => {
        setSelectedIndex(index);
        setSelectedComponent(button);
        setComponentProps(button.defaultProps);
    };


    const [componentsText, setComponentsText] = useState<string[]>([]);

    useEffect(() => {
        setComponentsText(prevTexts => {
            const newTexts = [...prevTexts];
            selectedButton.forEach((button, index) => {
                if (newTexts[index] === undefined) {
                    newTexts[index] = button.defaultProps.text || '';
                }
            });
            return newTexts;
        });



    }, [selectedButton]);
   // Modify the useEffect for text handling
useEffect(() => {
    setComponentsText(prevTexts => {
        const newTexts = [...prevTexts];
        selectedButton.forEach((button, index) => {
            // Preserve existing text if it exists
            if (!newTexts[index]) {
                newTexts[index] = button.defaultProps.text || 'test';
            }
        });
        // Only update text for selected component when btnText changes
        if (selectedIndex !== null && btnText) {
            newTexts[selectedIndex] = btnText;
        }
        return newTexts;
    });
}, [selectedButton, btnText, selectedIndex]);



    useEffect(() => {
        setComponentsStyles(prevStyles => {
            const newStyles = { ...prevStyles };
            if (selectedIndex !== null) {
                newStyles[selectedIndex] = {
                    ...newStyles[selectedIndex],
                    ...componentStyles
                };
            }
            return newStyles;
        });
    }, [componentStyles, selectedIndex]);


    const handleScreenClick = (e: React.MouseEvent) => {
        // Check if the clicked element has the 'draggable' class
        const target = e.target as HTMLElement;
        if (!target.closest('.draggable')) {
            setSelectedIndex(null);
            setSelectedComponent(null);
            setComponentProps(null);
        }
    };

    return (
        <>

            <div
                ref={screenRef}
                className='w-2/3 min-h-[500px] ml-auto m-10 mt-32 md:mt-36 border shadow-sm relative'
                onClick={handleScreenClick}
            >              <div className="w-full h-full absolute" >
                    {selectedButton.map((button, index) => (
                        <Draggable
                            key={index}
                            nodeRef={nodeRef}
                            bounds="parent"
                            defaultPosition={{ x: 50 + (index * 20), y: 50 + (index * 20) }}
                            onDrag={(e, data) => handleDrag(e as unknown as React.DragEvent, data)}
                        >
                            <div
                                ref={nodeRef}
                                className="absolute w-fit cursor-move"
                                onClick={() => handleComponentClick(index, button)}
                            >
                                {React.createElement(button.component as React.ComponentType<any>, {
                                    ...button.defaultProps,
                                    text: selectedIndex === index ? btnText : componentsText[index] || 'test',
                                    classes: `${selectedIndex === index ? 'border-2 border-blue-500' : ''} draggable`,
                                    styles: button.defaultProps.classes?.includes('changable')
                                        ? componentsStyles[index]
                                        : {}
                                })}



                            </div>
                        </Draggable>
                    ))}
                </div>
            </div>
        </>
    )
}
