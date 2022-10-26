import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <form className="flex flex-col gap-4 w-3/5 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="name@flowbite.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        required={true}
                    />
                </div>
                <p>Already have an account? <Link to='/login' className='text-blue-600'>Login</Link></p>

                <Button type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Register;