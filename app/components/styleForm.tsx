import { useState } from 'react';

export const StyleForm = () => {
    const [styles, setStyles] = useState({
        textColor: '#000000',
        primaryColor: '#0000ff',
        secondaryColor: '#00ff00',
        navbarBackground: '#000000',
        footerBackground: '#000000',
        footerNavbarTextColor: '#ffffff',
        fontFamily: 'font-sans',
        backgroundColor:'#ffffff',
    });

    
    const handleColorChange = (type:string, color:string) => {
        setStyles((prevStyles) => ({
            ...prevStyles,
            [type]: color,
        }));
    };

    const handleFontChange = (font:string) => {
        setStyles((prevStyles) => ({
            ...prevStyles,
            fontFamily: font,
        }));
    };

    return (
        <div className="p-4 space-y-6">
            <div className='grid grid-cols-2 justify-between'>
            <div className="space-y-2 col-span-1">
                    <label className="block text-xs text-wrap "> Background</label>
                    <input
                        type="color"
                        className="h-5 w-20 cursor-pointer"
                        value={styles.backgroundColor} // Set input value for controlled input
                        onChange={(e) => handleColorChange('backgroundColor', e.target.value)}
                    />
                </div>
                
                
              
               
                <div className="space-y-2 col-span-1">
                    <label className="block text-xs font-medium">Primary</label>
                    <input
                        type="color"
                        className="h-5 w-20 cursor-pointer"
                        value={styles.primaryColor}
                        onChange={(e) => handleColorChange('primaryColor', e.target.value)}
                    />
                </div>
                <div className="space-y-2 col-span-1">
                    <label className="block text-xs">Secondary</label>
                    <input
                        type="color"
                        className="h-5 w-20 cursor-pointer"
                        value={styles.secondaryColor}
                        onChange={(e) => handleColorChange('secondaryColor', e.target.value)}
                    />
                </div>
                <div className="space-y-2 col-span-1">
                    <label className="block text-xs font-medium">Navbar Background</label>
                    <input
                        type="color"
                        className="h-5 w-20 cursor-pointer"
                        value={styles.navbarBackground}
                        onChange={(e) => handleColorChange('navbarBackground', e.target.value)}
                    />
                </div>
                <div className="space-y-2 col-span-1">
                    <label className="block text-xs font-medium">Footer Background</label>
                    <input
                        type="color"
                        className="h-5 w-20 cursor-pointer"
                        value={styles.footerBackground}
                        onChange={(e) => handleColorChange('footerBackground', e.target.value)}
                    />
                </div>
                <div className="space-y-2 col-span-1">
                    <label className="block text-xs font-medium">Footer & Navbar Text</label>
                    <input
                        type="color"
                        className="h-5 w-20 cursor-pointer"
                        value={styles.footerNavbarTextColor}
                        onChange={(e) => handleColorChange('footerNavbarTextColor', e.target.value)}
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label className="block text-xs font-medium">Font Family</label>
                <select
                    className="w-full p-2 border rounded-md"
                    value={styles.fontFamily} // Set input value for controlled input
                    onChange={(e) => handleFontChange(e.target.value)}
                >
                    <option value="font-sans">Sans</option>
                    <option value="font-serif">Serif</option>
                    <option value="font-mono">Monospace</option>
                    <option value="font-poppins">Poppins</option>
                    <option value="font-roboto">Roboto</option>
                </select>
            </div>
        </div>
    );
};