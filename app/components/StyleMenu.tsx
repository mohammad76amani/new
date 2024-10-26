'use client'
import { useState } from 'react';

interface StyleMenuProps {
    componentId: string;
    setComponentStyles: (styles: any) => void;
}

export const StyleMenu: React.FC<StyleMenuProps> = ({ setComponentStyles }) => {
    const [styles, setStyles] = useState({
        width: 20,
        height: 10,
        backgroundColor: '#ffffff',
        color: '#000000',
        fontSize: 16,
        fontWeight: 400,
        fontFamily: 'Arial'
    });

    const handleStyleChange = (property: string, value: string | number) => {
        const newStyles = { ...styles, [property]: value };
        setStyles(newStyles);
        setComponentStyles(newStyles);
    };

    return (
        <div className="fixed top-4 lg:left-1/3 lg:w-[63%] md:w-4/5 transform  lg:rounded-full bg-white/90 backdrop-blur-sm p-4  shadow-lg border border-gray-200 lg:flex gap-4 items-center md:flex md:rounded-lg md:right-2">
            <div className="flex items-center gap-2">
                <label className="text-sm">Width:</label>
                <input 
                    type="number"
                    value={styles.width}
                    onChange={(e) => handleStyleChange('width', parseInt(e.target.value))}
                    className="w-16 p-1 border rounded"
                />
            </div>

            <div className="flex items-center gap-2">
                <label className="text-sm">Height:</label>
                <input 
                    type="number"
                    value={styles.height}
                    onChange={(e) => handleStyleChange('height', parseInt(e.target.value))}
                    className="w-16 p-1 border rounded"
                />
            </div>

            <div className="flex items-center gap-2 rounded-full">
                <label className="text-sm">Background:</label>
                <input 
                    type="color"
                    value={styles.backgroundColor}
                    onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                    className="w-6 h-6 p-0  rounded-full"
                />
            </div>

            <div className="flex items-center gap-2 rounded-full">
                <label className="text-sm">Text Color:</label>
                <input 
                    type="color"
                    value={styles.color}
                    onChange={(e) => handleStyleChange('color', e.target.value)}
                    className="w-6 h-6 p-0  rounded-full"
                />
            </div>

            <div className="flex items-center gap-2">
                <label className="text-sm">Font Size:</label>
                <input 
                    type="number"
                    value={styles.fontSize}
                    onChange={(e) => handleStyleChange('fontSize', parseInt(e.target.value))}
                    className="w-12 p-1 border rounded"
                />
            </div>

            <div className="flex items-center gap-2">
                <label className="text-sm">Font Weight:</label>
                <select 
                    value={styles.fontWeight}
                    onChange={(e) => handleStyleChange('fontWeight', parseInt(e.target.value))}
                    className="p-1 border rounded"
                >
                    <option value="100">Thin</option>
                    <option value="200">Extra Light</option>
                    <option value="300">Light</option>
                    <option value="400">Regular</option>
                    <option value="500">Medium</option>
                    <option value="600">Semi Bold</option>
                    <option value="700">Bold</option>
                </select>
            </div>

            
        </div>
    );
};
