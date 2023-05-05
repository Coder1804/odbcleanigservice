import React, {useEffect, useRef, useState} from 'react';
import {Form, useActionData, useNavigation, redirect, useSubmit} from "react-router-dom";
import MaskedInput from 'react-text-mask'
import {CirclesWithBar} from "react-loader-spinner";
import postman from '../../assets/postman.png';


export async function action(obj) {
    const formData = await obj?.request.formData();
    const username = formData.get('username');
    const phone = formData.get('phone');
    const message = formData.get('message');
    const headers = new Headers();
    headers.append("Content-Type" , "application/json");
    try {
        const res = await fetch('http://localhost:3000/v1/api/sendemail', {
            method:'post',
            headers:headers,
            body:JSON.stringify({
                username,phone,message

            })
        //     ,
        //     headers: {
        //     "Content-type": "application/json; charset=UTF-8"
        // }
        });
        const data = await  res.json();
        console.log(data)
    }catch (err)
    {
        console.error(err)
    }
    redirect('/')
    return 'success'

}

const Order = () => {
    const [success, setSuccess] = useState(false);

    const [errorUsername, setErrorUsername] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errormessage, setErrorMessage] = useState(false);

    const submit = useSubmit()

    const error = useActionData()
    const navigation = useNavigation();
    const formRef = useRef(null);


    const handleValidation = (event) => {

        const {name, value} = event.target;
        switch (name) {
            case "username":
                if (value.length < 3 || value.length > 16) {
                    setErrorUsername(true);
                } else {
                    setErrorUsername(false)
                }
                break;
            case "phone":
                const match = value.match(/\d/g);
                if (!match || match.length !== 12) {
                    setErrorPhone(true)
                } else {
                    setErrorPhone(false)
                }
                break;
            case "message": {
                if (value.length < 10) {
                    setErrorMessage(true)

                } else {
                    setErrorMessage(false)
                }
            }

        }

    }
    const handleSubmit =async (e)=>{
        e.preventDefault();
        if(!errorUsername && !errorPhone && !errormessage)
        {
            submit(e.currentTarget);
        }
    }
    return (
        <div className="my-6 flex flex-col md:flex-row gap-8">
            <Form
                onSubmit = {handleSubmit}
                onBlur={handleValidation}
                className="message-form flex-1 flex flex-col bg-primary p-6 gap-10"
                method='post'
                ref={formRef}
                replace>
                <div className="flex flex-col  gap-3">
                    <label className="text-lg font-medium" htmlFor="username">Ismingiz:</label>
                    <input
                        className="h-[40px] p-4"
                        autoComplete={'off'}
                        placeholder="Ismingiz..."
                        type="text"
                        name="username"
                        id="username"
                        required/>
                    {errorUsername && <span>Ism 3-16 ta harfdan iborat bo'lishi lozim </span>}
                </div>

                <div className="flex-1 flex flex-col  gap-3">
                    <label className="text-lg font-medium" htmlFor="phone">Telfon raqam:</label>
                    <MaskedInput
                        mask={['(', '+', '9', '9', '8', ')', ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                        guide={true}
                        className="h-[40px] p-4"
                        autoComplete={'off'}
                        name="phone"
                        placeholder='(+998) __ ___ - __ - __'
                        id="phone"/>
                    {errorPhone && <span>Telfon raqamini to'g'ri kiriting!</span>}
                </div>

                <div className="flex flex-col gap-3">
                    <label className="text-lg font-medium" htmlFor="message">Xabar:</label>
                    <textarea
                        className="p-2"
                        id="message"
                        name="message"
                        rows={6}
                        required/>
                    {errormessage && <span>Eng kamida 10 ta harfdan iborat bo'lishi lozim!</span>}
                </div>
                <button className="bg-btn-primary my-3 p-4 text-lg font-medium text-text-secondary flex justify-center items-center gap-2" type="submit"
                        disabled={navigation.state === 'submitting'}>
                    {navigation.state === 'submitting' ? <>
                        <CirclesWithBar
                            height="24"
                            width="24"
                            color="#115E59"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            outerCircleColor=""
                            innerCircleColor=""
                            barColor=""
                            ariaLabel='circles-with-bar-loading'
                        />
                        <span>Xabar yuborilmoqda...</span>
                    </> : 'Yuborish'}
                </button>
            </Form>

            <div className="flex-1">
                <img loading="lazy" src={postman} alt="postman"/>
            </div>

        </div>
    );
};

export default Order;
