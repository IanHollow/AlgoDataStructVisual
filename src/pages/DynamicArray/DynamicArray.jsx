import React, { useState } from "react";
import { DynamicArray as DynaArr } from "../../JS_AlgoDataStructs/DynamicArray/DynamicArray.js"
import { Formik } from "formik"
import * as yup from 'yup';
import { Form, Button } from "react-bootstrap"
import "./DynamicArray.css"
import { AiOutlineArrowRight } from "react-icons/ai"

function DynamicArray() {
    let [dynaArr, setDynaArr] = useState(new DynaArr());
    let [popedElement, setPopedElement] = useState("");

    const insertDynaArr = (element, index) => {
        dynaArr.insert(element, index);
        setDynaArr(dynaArr);
        disp_setDynaArr(displayDynamicArray(dynaArr));
    }

    const removeDynaArr = (index) => {
        dynaArr.removeAt(index);
        setDynaArr(dynaArr);
        disp_setDynaArr(displayDynamicArray(dynaArr));
    }

    const pushDynaArr = (element) => {
        insertDynaArr(element, dynaArr.getSize());
    }

    const popDynaArr = () => {
        if (dynaArr.getSize() === 0) {
            return;
        }

        let removed_element = dynaArr.get(dynaArr.getSize() - 1);
        dynaArr.removeAt(dynaArr.getSize() - 1);

        setDynaArr(dynaArr);
        disp_setDynaArr(displayDynamicArray(dynaArr));
        setPopedElement(removed_element);
    }

    const resetDynaArr = () => {
        dynaArr = new DynaArr();
        setDynaArr(dynaArr);
        disp_setDynaArr(displayDynamicArray(dynaArr));
        setPopedElement("");
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

    let [disp_dynaArr, disp_setDynaArr] = useState(displayDynamicArray(dynaArr));

    const validateInsert = yup.object({
        insert_element: yup
            .string('enter an element')
            .required('element is required'),
        insert_index: yup
            .number('enter a number')
            .integer('enter an integer')
            .moreThan(-1, 'index is invalid')
            .lessThan(dynaArr.getSize() + 1, 'index cannot be greater than length')
            .required('index is required'),
    });

    const validateRemove = yup.object({
        remove_index: yup
            .number('enter a number')
            .integer('enter an integer')
            .moreThan(-1, 'index is invalid')
            .lessThan(dynaArr.getSize(), 'index cannot be greater than length')
            .required('index is required'),
    });

    const validatePush = yup.object({
        push_element: yup
            .string('enter an element')
            .required('element is required')
            .max(8, "Try to keep elements below 8 characters"),
    });

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
                        Length: {dynaArr.getSize()} | Capacity: {dynaArr.getCapacity()}
                    </div>
                    <div className="col text-center my-auto">
                        <Button type="button" className="btn btn-secondary" onClick={() => resetDynaArr()}>reset</Button>
                    </div>
                </div>
            </div >

            <div className="container" style={{ height: `25rem` }}>
                <div className="container-fluid p-3">
                    <div className="row justify-content-center" >
                        {disp_dynaArr}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center p-2">
                    <div className="col my-auto d-flex justify-content-center">
                        <div className="card p-0" style={{ width: `21rem` }}>
                            <div className="card-body px-2 pb-3 pt-2">
                                <h6 className="text-center card-title">Insert</h6>
                                <Formik
                                    initialValues={{
                                        insert_element: '',
                                        insert_index: '',
                                    }}
                                    validationSchema={validateInsert}
                                    onSubmit={(values) => {
                                        insertDynaArr(values.insert_element, values.insert_index);
                                    }}
                                >
                                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                                        <Form noValidate onSubmit={handleSubmit} className="row justify-content-center">
                                            <div className="col-auto p-0 me-2 position-relative showhim" style={{ width: `7rem` }}>
                                                <Form.Control
                                                    type="text"
                                                    name="insert_element"
                                                    placeholder="element"
                                                    value={values.insert_element}
                                                    onChange={handleChange}
                                                    isValid={touched.insert_element && !errors.insert_element}
                                                    isInvalid={!!errors.insert_element}
                                                />
                                                <div className="invalid-tooltip" style={{ width: `7rem` }}>
                                                    <div className="showme text-center">
                                                        {errors.insert_element}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto p-0 me-2 position-relative showhim" style={{ width: `7rem` }}>
                                                <Form.Control
                                                    type="text"
                                                    name="insert_index"
                                                    placeholder="index"
                                                    value={values.insert_index}
                                                    onChange={handleChange}
                                                    isValid={touched.insert_index && !errors.insert_index}
                                                    isInvalid={!!errors.insert_index}
                                                />
                                                <div className="invalid-tooltip" style={{ width: `7rem` }}>
                                                    <div className="showme text-center">
                                                        {errors.insert_index}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto p-0">
                                                <Button type="submit" className="btn btn-primary" onClick={() => insertDynaArr(values.insert_element, values.insert_index)}>insert</Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                    <div className="col my-auto d-flex justify-content-center">
                        <div className="card p-0" style={{ width: `21rem` }}>
                            <div className="card-body px-2 pb-3 pt-2">
                                <h6 className="text-center card-title">Remove</h6>
                                <Formik
                                    initialValues={{
                                        remove_index: '',
                                    }}
                                    validationSchema={validateRemove}
                                    onSubmit={(values) => {
                                        removeDynaArr(values.remove_index);
                                    }}
                                >
                                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                                        <Form noValidate onSubmit={handleSubmit} className="row justify-content-center">
                                            <div className="col-auto p-0 me-2 position-relative showhim" style={{ width: `7rem` }}>
                                                <Form.Control
                                                    type="text"
                                                    name="remove_index"
                                                    placeholder="index"
                                                    value={values.remove_index}
                                                    onChange={handleChange}
                                                    isValid={touched.remove_index && !errors.remove_index}
                                                    isInvalid={!!errors.remove_index}
                                                />
                                                <div className="invalid-tooltip" style={{ width: `7rem` }}>
                                                    <div className="showme text-center">
                                                        {errors.remove_index}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto p-0">
                                                <Button type="submit" className="btn btn-primary">remove</Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center p-2">
                    <div className="col my-auto d-flex justify-content-center">
                        <div className="card p-0" style={{ width: `21rem` }}>
                            <div className="card-body px-2 pb-3 pt-2">
                                <h6 className="text-center card-title">Push</h6>
                                <Formik
                                    initialValues={{
                                        push_element: '',
                                    }}
                                    validationSchema={validatePush}
                                    onSubmit={(values) => {
                                        pushDynaArr(values.push_element);
                                    }}
                                >
                                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                                        <Form noValidate onSubmit={handleSubmit} className="row justify-content-center">
                                            <div className="col-auto p-0 me-2 position-relative showhim" style={{ width: `7rem` }}>
                                                <Form.Control
                                                    type="text"
                                                    name="push_element"
                                                    placeholder="element"
                                                    value={values.push_element}
                                                    onChange={handleChange}
                                                    isValid={touched.push_element && !errors.push_element}
                                                    isInvalid={!!errors.push_element}
                                                />
                                                <div className="invalid-tooltip" style={{ width: `7rem` }}>
                                                    <div className="showme text-center">
                                                        {errors.push_element}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto p-0">
                                                <Button type="submit" className="btn btn-primary">push</Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                    <div className="col my-auto d-flex justify-content-center">
                        <div className="card p-0" style={{ width: `21rem` }}>
                            <div className="card-body px-2 pb-3 pt-2">
                                <h6 className="text-center card-title">Pop</h6>

                                <div className="row justify-content-center">
                                    <div className="col-auto my-auto p-0">
                                        <Button type="submit" className="btn btn-primary" onClick={() => popDynaArr()}>pop</Button>
                                    </div>
                                    <div className="col-auto my-auto px-3">
                                        <AiOutlineArrowRight />
                                    </div>
                                    <div className="col-auto my-auto p-0">
                                        <div className="card px-2 p-0" style={{ height: `2.2rem` }}>
                                            <div className="card-body p-0">
                                                <p className="text-center my-auto mt-sm-1">{popedElement}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DynamicArray;