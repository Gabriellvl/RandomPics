import React, {useState} from "react";

function HiddenValue({text, value}) {
    const [isHidden, setIsHidden] = useState(true);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    }

    return (
        <h2>
            {`${text}: `} &nbsp;
            <span
                onClick={toggleVisibility}
                style={{
                    cursor: "pointer",
                    display: "inline-block",
                    position: "relative",
                    padding: "5px 10px",
                    backgroundColor: isHidden ? "rgba(0, 0, 0, 0.3)" : "transparent",
                    color: isHidden ? "transparent" : "black",
                    borderRadius: "5px",
                    fontWeight: "bold",
                }}
            >
        {value}
                {isHidden && (
                    <span
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: "5px",
                        }}
                    ></span>
                )}
      </span>
        </h2>
    );
}

export default HiddenValue;