import React, { useState } from 'react';
import axios from '../../axios'

const SignUp = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        date: '',
    })

    const signUp = async () => {
        return axios.post('', { 'Content-Type': 'application/json' },).then(({ data }) => {
            console.log(data);
            return JSON.stringify(data, null, 2);
        }).catch(err => console.error(err));
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    return <>
        <div className="flex-fill d-flex flex-column justify-content-center">

            <div className="container-tight py-6">
                <form className="card card-md needs-validation" onSubmit={submit} autoComplete="off" noValidate>
                    <div className="card-body">
                        <h2 className="mb-5 text-center text-uppercase">Signup</h2>

                        <div className="mb-3">
                            <label className="form-label">E-Mail</label>
                            <input
                                className="form-control has-error"
                                name="name"
                                type="name"
                                placeholder="Enter your Name"
                                autoComplete="off"
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">E-Mail field required.</div>
                        </div>


                        <div className="mb-3">
                            <label className="form-label">E-Mail</label>
                            <input
                                className="form-control has-error"
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                                autoComplete="off"
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">E-Mail field required.</div>
                        </div>

                        <div className="mb-2">
                            <label className="form-label">
                                Password
                        </label>
                            <input
                                type="password"
                                className="form-control has-error"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">Password Field is required.</div>
                        </div>

                        <div className="mb-2">
                            <label className="form-label">
                                Date
                        </label>
                            <input
                                type="date"
                                className="form-control has-error"
                                name="date"
                                placeholder="date"
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">Password Field is required.</div>
                        </div>


                        <div className="mb-2">
                            <label className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <span className="form-check-label">Remember me</span>
                            </label>
                        </div>
                        <div className="form-footer">
                            <button type="submit" className="btn btn-primary btn-block" style={{ background: 'linear-gradient(to left, #B70000 0%, #144061 100%)' }}>
                                Se connecter
                        </button>
                        </div>
                    </div>
                </form>
                <div className="hr-text">{`©${new Date().getFullYear()} LOC`}</div>
            </div>
        </div>
    </>
}

export default SignUp;