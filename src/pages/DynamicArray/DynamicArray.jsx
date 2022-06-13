import React from "react";
import "./DynamicArray.scss"

function displayDynamicArray() {
    let elements = []

    let numItems = 20

    for (let index = 0; index < numItems; index++) {
        elements.push(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">{index}</h5>
                </div>
            </div>
        );
    }
    return elements
}

function DynamicArray() {
    return (
        <div>
            <div className="container p-3">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title text-center">Dynamic Array</h2>
                    </div>
                </div>
            </div>

            <div className="card-group p-3">
                {displayDynamicArray()}
            </div>
        </div>
    );
}

export default DynamicArray;