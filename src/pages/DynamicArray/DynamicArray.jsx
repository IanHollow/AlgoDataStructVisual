import React from "react";
import "./DynamicArray.scss"
import { DynamicArray as DynaArr } from "../../JS_AlgoDataStructs/DynamicArray/DynamicArray.js"
import { Formik, Field, Form } from "formik"

class DynamicArray extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dynaArr: new DynaArr() }
    }

    displayDynamicArray(dynaArr) {
        let convrt_arr = [];

        for (let i = 0; i < dynaArr.capacity; i++) {
            convrt_arr.push(
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-center">{dynaArr.arr[i]}</h5>
                    </div>
                </div>
            );
        }
        return convrt_arr
    }

    setDynaArr(new_element) {
        let old_dynaArr = this.state.dynaArr;
        old_dynaArr.push(new_element);
        this.setState({ dynaArr: old_dynaArr });
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

                <Formik
                    initialValues={{
                        "add_element": ""
                    }}
                    onSubmit={(values) => {
                        this.setDynaArr(values.add_element);
                    }}
                >
                    <Form>
                        <label htmlFor="add_element">Push Element</label>
                        <Field id="add_element" name="add_element" placeholder="any value" />

                        <button type="Submit">Submit</button>
                    </Form>
                </Formik>

                <div className="card-group p-3">
                    {this.displayDynamicArray(this.state.dynaArr)}
                </div>
            </div >
        )
    }
}

export default DynamicArray;