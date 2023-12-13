import React, { useState } from 'react'

import '../styles/employees.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'


export default function Employees() {
    const [employees, setEmployees] = useState([])
    const [employee, setEmployee] = useState(false)
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const [editStatus, setEditStatus] = useState(false)

    const onFormSubmit = async (formData) => {
        if (!editStatus) {
            await axios.post('http://localhost:5000/employees', formData)
        }
        else {
            if (employee && employee.id === formData.id) {
                await axios.put(`http://localhost:5000/employees/${employee.id}`, formData).then((response) => {
                    alert('updated')
                }
                )
            }
        }
    }

    const getEmployees = async () => {
        await axios.get('http://localhost:5000/employees').then((response) => {
            console.log(response.data)
            setEmployees(response.data)

        })
    };
    const handleEdit = async (employee) => {
        await axios.get(`http://localhost:5000/employees/${employee.id}`).then((response) => {
            setValue('id', response.data.id)
            setValue('empId', response.data.empId)
            setValue('empName', response.data.empName)
            setValue('empGender', response.data.empGender)
            setValue('empEmail', response.data.empEmail)
            setValue('empContactNo', response.data.empContactNo)
            setValue('empAddress', response.data.empAddress)

            setEmployee(response.data)
            setEditStatus(true)

        })
    }

    const handleDelete = async (employee) => {
        if (window.confirm('Are you sure want to delete?')) {
            await axios.delete(`http://localhost:5000/employees/${employee.id}`).then((response) => {
                getEmployees()
            })

        }
    }



    React.useEffect(() => {

        getEmployees()
    }, []);


    const reset = () => {

        setValue('empId', '')
        setValue('empName', '')
        setValue('empGender', '')
        setValue('empEmail', '')
        setValue('empContactNo', '')
        setValue('empAddress', '')

    }


    if (!employees) return null;




    return (
        <>
            <div className='container-fluid pt-5'>
                <div className="row mt-10"><p>&nbsp;</p></div>
                <div className="row gy-4">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4 register-form">
                        <h2>EMPLOYEE REGISTRATION FORM</h2>
                        <div><p>&nbsp;</p></div>
                        <form className="mt-3" onSubmit={handleSubmit(onFormSubmit)}>

                            <div className="mb-3 mt-3 row">
                                <label className="col-sm-3 col-form-label">Employee Id :</label>

                                <div className="col-sm-6">
                                    <input type='text' className='form-control' {...register('empId', { required: true, pattern: /^[0-9\s]{3}$/ })} />
                                    {errors?.empId?.type === "required" && <span style={{ color: 'red' }}>* Emp Id is required</span>}
                                    {errors?.empId?.type === "pattern" && <span style={{ color: 'red' }}>* Emp Id should be 3 characters</span>}
                                </div>
                            </div>
                            <div className="mb-3 mt-3 row">
                                <label className="col-sm-3 col-form-label">Name :</label>

                                <div className="col-sm-6">
                                    <input type='text' className='form-control' {...register('empName', { required: true, pattern: /^[A-Za-z\s]*$/ })} />
                                    {errors?.empName?.type === "required" && <span style={{ color: 'red' }}>* Name is required</span>}
                                    {errors?.empName?.type === "pattern" && <span style={{ color: 'red' }}>* Name should be alphabets</span>}
                                </div>
                            </div>
                            <div className="mb-3 mt-3 row">
                                <label className="col-sm-3 col-form-label">Gender :</label>

                                <div className="col-sm-6 col-form-label">
                                    <input type="radio" value="M" {...register('empGender')} /> Male &nbsp;
                                    <input type="radio" value="F" {...register('empGender')} /> Female
                                </div>
                            </div>
                            <div className="mb-3 mt-3 row">
                                <label className="col-sm-3 col-form-label">Email :</label>

                                <div className="col-sm-6">
                                    <input type='text' className='form-control' {...register('empEmail', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                                    {errors?.empEmail?.type === "required" && <span style={{ color: 'red' }}>* Email is required</span>}
                                    {errors?.empEmail?.type === "pattern" && <span style={{ color: 'red' }}>* Email should be valid</span>}
                                </div>
                            </div>
                            <div className="mb-3 mt-3 row">
                                <label className="col-sm-3 col-form-label">Contact No :</label>

                                <div className="col-sm-6">
                                    <input type='text' className='form-control' {...register('empContactNo', { required: true, pattern: /^[0-9]*$/ })} />
                                    {errors?.empContactNo?.type === "required" && <span style={{ color: 'red' }}>* Contact Number is required</span>}
                                    {errors?.empContactNo?.type === "pattern" && <span style={{ color: 'red' }}>* Contact Number should be numeric</span>}
                                </div>
                            </div>
                            <div className="mb-3 mt-3 row">
                                <label className="col-sm-3 col-form-label">Address :</label>

                                <div className="col-sm-6">
                                    <input type='text' className='form-control' {...register('empAddress', { required: true })} />
                                    {errors?.empAddress?.type === "required" && <span style={{ color: 'red' }}>* Address is required</span>}
                                </div>
                            </div>
                            <div className="row"><p>&nbsp;</p></div>
                            <div className="row mt-4 mb-4">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-3">
                                    <button type="button" onClick={() => reset()} className="form-control btn btn-warning" >Reset</button>

                                </div>
                                <div className="col-sm-3">
                                    <button type="submit" className="form-control btn btn-success" >Submit</button>
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-6 register-form-detail">
                    <div><p>&nbsp;</p></div>
                    <div><p>&nbsp;</p></div>
                            <h4>EMPLOYEE DETAILS</h4>
                            
                            <div><p>&nbsp;</p></div>
                            <table className='table table-dark table-bordered"'>
                                <thead>
                                    <tr>
                                        <th>Employee ID</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Email</th>
                                        <th>Contact No</th>
                                        <th>Address</th>
                                        <th colSpan="2"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        employees.map(employee =>

                                            <tr key={employee.id}>
                                                <td>{employee.empId}</td>
                                                <td>{employee.empName}</td>
                                                <td>{employee.empGender}</td>
                                                <td>{employee.empEmail}</td>
                                                <td>{employee.empContactNo}</td>
                                                <td>{employee.empAddress}</td>
                                                <td><button className='btn btn-primary' onClick={() => handleEdit(employee)}>Edit</button></td>
                                                <td><button className='btn btn-danger' onClick={() => handleDelete(employee)}>Delete</button></td>
                                            </tr>
                                        )

                                    }


                                </tbody>
                            </table>

                        
                    </div>
                </div>
            </div>
        </>
    )
}
