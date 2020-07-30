import React, { useContext } from "react";
import { ColorContext } from "../index";
import Color from "./Color";
import { useColors } from "../ColorProvider";

export default function ColorList() { 
    const { colors } = useColors;
//     colors = [], 
//     onRemoveColor = f => f, The commented out stuff here is what's made unnecessary by using context.
//     onRateStar = f => f 
// }) {
    if(!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
    return (
        <div>
            {
                colors.map(color =>
                <Color 
                key={color.id} 
                {...color} 
                // onRemove={onRemoveColor}
                // onRate={onRateStar}
                />
                )
            }
        </div>
    );
}