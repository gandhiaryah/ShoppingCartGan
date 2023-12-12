
import "../styles/registerform.css";
import axios from "axios";
import { useForm } from "react-hook-form";

function RegisterForm() {

    const { register, handleSubmit, formState: { errors } } = useForm()


    const onFormSubmit = async (formData) => {
        console.log(formData)
        await axios.post('http://localhost:5002/users', formData)
    }

    return (
        <>
            <div className="container-sm d-flex justify-content-center vertical-center px-4">
                <div className="col-sm-12  register-form  ">
                    <h2 className="regtitle">USER REGISTRATION</h2>
                    <hr />
                    <form className="form-group mt-3" onSubmit={handleSubmit(onFormSubmit)}>
                        <div className="mb-3 mt-3 row">
                            <label className="col-sm-4 col-form-label px-12">Email :</label>

                            <div className="col-sm-8">
                                <input type='text' className='form-control' {...register('Email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                                {errors?.Email?.type === "required" && <span style={{ color: 'red' }}>* Email is required</span>}
                                {errors?.Email?.type === "pattern" && <span style={{ color: 'red' }}>* Email should be valid</span>}
                            </div>
                        </div>
                        <div className="mb-3 mt-3 row gy-4">
                            <label className="col-sm-4 col-form-label">Password :</label>

                            <div className="col-sm-8">
                                <input type='password' className='form-control' {...register('Password', { required: true, pattern: /^[0-9A-Za-z\s]{8,}$/ })} />
                                {errors?.Password?.type === "required" && <span style={{ color: 'red' }}>* Password is required</span>}
                                {errors?.Password?.type === "pattern" && <span style={{ color: 'red' }}>* Minimum eight characters, at least one letter and one number</span>}
                            </div>
                        </div>
                        <div className="mb-3 mt-3 row gy-4">
                            <label className="col-sm-4 col-form-label">Confirm Password :</label>

                            <div className="col-sm-8">
                                <input type='password' className='form-control' {...register('ConfirmPassword', { required: true })} />
                                {errors?.ConfirmPassword?.type === "required" && <span style={{ color: 'red' }}>* ConfirmPassword is required</span>}

                            </div>
                        </div>

                        <div className="row mt-4 mb-4 gy-5">
                        <div className="col-sm-2"></div>
                            <div className="col-sm-8 text-center">
                                <button type="submit" className="form-control btn btn-success" >Submit</button>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default RegisterForm;