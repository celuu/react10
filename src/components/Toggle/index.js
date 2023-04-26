import { useTheme, useThemeUpdate } from "../../ThemeContext";

const Toggle = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
    };

    return (
        <div style={themeStyles}>
        <button onClick={toggleTheme}>TOGGLE</button>
        <div>BIG BOX</div>
        </div>

    )

    

}

export default Toggle;