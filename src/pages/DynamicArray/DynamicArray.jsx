import React from "react";
import "./DynamicArray.scss"
import { DynamicArray as DynaArr } from "../../JS_AlgoDataStructs/DynamicArray/DynamicArray.js"
import { Formik, Field, Form } from "formik"

class DynamicArray extends React.Component {
    constructor(props) {
        super(props);
        let new_dynaArr = new DynaArr();
        this.state = {
            dynaArr: new_dynaArr,
            length: new_dynaArr.getSize(),
            capacity: new_dynaArr.getCapacity()
        }
    }

    resetDynaArr() {
        let new_dynaArr = new DynaArr();
        this.setState({
            dynaArr: new_dynaArr,
            length: new_dynaArr.getSize(),
            capacity: new_dynaArr.getCapacity()
        });
    }

    displayDynamicArray(dynaArr) {
        let convrt_arr = [];

        for (let i = 0; i < dynaArr.getCapacity(); i++) {
            convrt_arr.push(
                <div className="card" key={i}>
                    <div className="card-body">
                        <h5 className="card-title text-center">{dynaArr.arr[i]}</h5>
                    </div>
                </div>
            );
        }

        return convrt_arr
    }

    addDynaArr(new_element) {
        let old_dynaArr = this.state.dynaArr;
        old_dynaArr.push(new_element);
        this.setState({
            dynaArr: old_dynaArr,
            length: old_dynaArr.getSize(),
            capacity: old_dynaArr.getCapacity()
        });
    }

    render() {
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
                        <div className="col text-center">
                            <Formik
                                initialValues={{
                                    "add_element": ""
                                }}
                                onSubmit={(values) => {
                                    this.addDynaArr(values.add_element);
                                }}
                            >
                                <Form>
                                    <label htmlFor="add_element">Push Element</label>
                                    <Field id="add_element" name="add_element" placeholder="any value" />

                                    <button className="btn btn-primary" type="Submit">Submit</button>
                                </Form>
                            </Formik>
                        </div>
                        <div className="col text-center">
                            Length: {this.state.length} | Capacity: {this.state.capacity}
                        </div>
                        <div className="col text-center">
                            <button type="button" className="btn btn-light" onClick={() => this.resetDynaArr()}>Clear</button>
                        </div>
                    </div>
                </div>

                <div className="card-group p-3">
                    {this.displayDynamicArray(this.state.dynaArr)}
                </div>
            </div >
        )
    }
}

export default DynamicArray;