import React, { useState } from "react";
import { DynamicArray as DynaArr } from "../../JS_AlgoDataStructs/DynamicArray/DynamicArray.js"
//import { usePopper } from "react-popper"
import "./DynamicArray.css"

function DynamicArray() {
    let [dynaArr, dynaArrState] = useState(new DynaArr());
    let [insertForm, insertFormState] = useState(["", ""]);

    const updateInsertForm = (index, e) => {
        insertForm[index] = e.target.value;
        insertFormState(insertForm);
    }

    const addDynaArr = (element, index) => {
        dynaArr.insert(element, index);
        dynaArrState(dynaArr);
        disp_dynaArrState(displayDynamicArray(dynaArr));
    }

    const clearDynaArr = () => {
        dynaArr = new DynaArr();
        dynaArrState(dynaArr);
        disp_dynaArrState(displayDynamicArray(dynaArr));
    }

    const displayDynamicArray = (dynaArr) => {
        let convrt_arr = [];

        for (let i = 0; i < dynaArr.getCapacity(); i++) {
            convrt_arr.push(
                <div className="col-auto p-0 pb-2" key={i}>
                    <div className="card h-100" style={{ width: `8rem` }}>
                        <div className="card-body">
                            <h5 className="card-title text-center">{dynaArr.arr[i]}</h5>
                        </div>
                        <div className="card-footer text-center p-0">
                            <small className="text-muted">{i}</small>
                        </div>
                    </div>
                </div>
            );
        }

        return convrt_arr;
    }

    let [disp_dynaArr, disp_dynaArrState] = useState(displayDynamicArray(dynaArr));

    return (
        <div>
            <div className="container p-3">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title text-center">Dynamic Array</h2>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col text-center my-auto">
                        <div className="card p-0" style={{ width: `21rem` }}>
                            <div className="card-body px-2 pb-3 pt-2">
                                <form className="row justify-content-center">
                                    <h6 className="text-center card-title">Insert Element</h6>
                                    <div className="col-auto p-0 me-2" style={{ width: `7rem` }}>
                                        <input type="text" className="form-control" id="new_element" placeholder="element" onChange={(e) => updateInsertForm(0, e)} />
                                    </div>
                                    <div className="col-auto p-0 me-3" style={{ width: `7rem` }}>
                                        <input type="text" className="form-control" id="element_index" placeholder="index" onChange={(e) => updateInsertForm(1, e)} />
                                    </div>
                                    <div className="col-auto p-0">
                                        <button type="button" className="btn btn-primary" onClick={
                                            () => addDynaArr(insertForm[0], insertForm[1])
                                        }>
                                            insert
                                        </button>
                                        <div id="tooltip" role="tooltip">
                                            My tooltip
                                            <div id="arrow" data-popper-arrow></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col text-center my-auto">
                        Length: {dynaArr.getSize()} | Capacity: {dynaArr.getCapacity()}
                    </div>
                    <div className="col text-center my-auto">
                        <button type="button" className="btn btn-secondary" onClick={() => clearDynaArr()}>Clear</button>
                    </div>
                </div>
            </div >

            <div className="container">
                <div className="container-fluid p-3">
                    <div className="row justify-content-center" >
                        {disp_dynaArr}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DynamicArray;