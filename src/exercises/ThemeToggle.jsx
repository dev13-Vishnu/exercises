import React, {useState} from'react';

function ThemeToggle(){
    const [isDarkTheme, setIsDarkTheme] =useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    return(
        <div className={isDarkTheme?'dark-theme':'light-theme'}>

        </div>
    )
}
export default ThemeToggle;