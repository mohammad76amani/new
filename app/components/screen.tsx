import React, { useEffect, useRef, useState } from 'react'
import Draggable, { DraggableData } from 'react-draggable'

interface SubMenu1Props {
    selectedButton: any[];
}

export const Screen: React.FC<SubMenu1Props> = ({ selectedButton }) => {
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

    const handleBackgroundColorChange = (color: string) => {
        if (selectedIndex !== null) {
            setComponentsStyles(prevStyles => ({
                ...prevStyles,
                [selectedIndex]: {
                    ...prevStyles[selectedIndex],
                    backgroundColor: color
                }
            }));
        }
    };

    const [componentsText, setComponentsText] = useState<string[]>([]);
    const [componentsClasses, setComponentsClasses] = useState<string[]>([]);

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

        setComponentsClasses(prevClasses => {
            const newClasses = [...prevClasses];
            selectedButton.forEach((button, index) => {
                if (newClasses[index] === undefined) {
                    newClasses[index] = button.defaultProps.classes || '';
                }
            });
            return newClasses;
        });

        setComponentsStyles(prevStyles => {
            const newStyles = { ...prevStyles };
            selectedButton.forEach((button, index) => {
                if (newStyles[index] === undefined) {
                    newStyles[index] = button.defaultProps.styles || {};
                }
            });
            return newStyles;
        });
    }, [selectedButton]);

    return (
        <>
            {selectedIndex !== null && (
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <input
                        type="text"
                        className="border p-2 rounded"
                        value={componentsText[selectedIndex]}
                        onChange={(e) => {
                            const newTexts = [...componentsText];
                            newTexts[selectedIndex] = e.target.value;
                            setComponentsText(newTexts);
                        }}
                        placeholder="Enter text"
                    />
                    <input
                        type="text"
                        className="border p-2 rounded"
                        value={componentsClasses[selectedIndex]}
                        onChange={(e) => {
                            const newClasses = [...componentsClasses];
                            newClasses[selectedIndex] = e.target.value;
                            setComponentsClasses(newClasses);
                        }}
                        placeholder="Enter classes"
                    />
                   <input 
                        type="color"
                        value={componentsStyles[selectedIndex]?.backgroundColor || '#000000'}
                        onChange={(e) => handleBackgroundColorChange(e.target.value)}
                        className="w-6 h-6 p-0 rounded-full"
                    />
                </div>
            )}

            <div ref={screenRef} className='w-2/3 min-h-[500px] ml-auto m-10 mt-32 md:mt-36 border shadow-sm relative'>
                <div className="w-full h-full absolute" >
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
                                    text: componentsText[index] || '',
                                    classes: `${componentsClasses[index] || ''} ${selectedIndex === index ? 'border-2 border-blue-500' : ''} draggable`,
                                    styles: componentsStyles[index] || {}
                                })}
                            </div>
                        </Draggable>
                    ))}
                </div>
            </div>
        </>
    )
}
