import React, {useEffect, useRef, useState} from 'react';
import {Form , useActionData , useNavigation , redirect} from "react-router-dom";
import MaskedInput from 'react-text-mask'
import {ColorRing} from "react-loader-spinner";
import postman from '../../assets/postman.png';


export async function action(obj)
{
    const formData = await obj?.request.formData();
    const username = formData.get('username');
    const phone = formData.get('phone');
    const message = formData.get('message');
    console.log(username , phone )
    if(username.length < 3 && message.length < 10)
    {
        return {
            usernameError:'Kamida 3 harfdan iborat bolishi lozim',
            messageError : 'Xabar kamida 10ta harfdan iborat bo\'lishi lozim'
        }
    }
    if(username.length < 3)
    {
        return {
            usernameError: 'Kamida 3 harfdan iborat bolishi lozim',
        }
    }
    if(message.length < 10)
    {
        return {
            messageError : 'Xabar kamida 10ta harfdan iborat bo\'lishi lozim'
        }
    }
    redirect('/')
    return 'success'

}

const Order = () => {
    const [success, setSuccess] = useState(false);
    const [loading , setLoading] = useState(false);
    const error = useActionData()
    const navigation = useNavigation();
    const formRef = useRef(null);
    const numberRef = useRef(null);
    console.log("adasdasd",numberRef.current);
    const timer = ()=> setTimeout(()=>{
        setSuccess(false)
    },3000)
    useEffect(() => {

        if(error === 'success')
        {
            setSuccess(true);
            formRef.current.reset();
            timer();
        }
    }, [error]);

    console.log(error, "i am error")
    return (
        <div className="my-6 flex gap-8">
            <Form
                className="w-[50%] bg-primary p-6"
                method='post'
                ref={formRef}
                replace >
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
                    <span>{error?.usernameError}</span>
                </div>

                <div className="flex flex-col  gap-3">
                    <label className="text-lg font-medium" htmlFor="phone">Telfon raqam:</label>
                    <MaskedInput
                        mask={['(','+' ,'9', '9', '8', ')', ' ',/\d/,/\d/,' ' ,/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                        guide={true}
                        className="h-[40px] p-4"
                        autoComplete={'off'}
                        name="phone"
                        placeholder = '(+998) __ ___ - __ - __'
                        id="phone" />
                    <span>{error?.phoneError}</span>
                </div>

                <div className="flex flex-col gap-3">
                    <label className="text-lg font-medium" htmlFor="message">Xabar:</label>
                    <textarea
                        className="p-2"
                        id="message"
                        name="message"
                        rows={6}
                        required/>
                    <span>{error?.messageError}</span>

                </div>
                <button className="bg-btn-primary p-4 text-lg font-medium text-text-secondary" type="submit" disabled={navigation.state === 'submitting'}>
                    {navigation.state === 'submitting' ? 'Xabar yuborilmoqda...' : 'Yuborish'}
                </button>
                {success
                    &&
                    <div className="flex flex-col text-lg font-medium gap-2 items-center">
                        <ColorRing
                            visible={true}
                            height="40"
                            width="40"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />
                        <h4>Xabar yuborilmoqda ... </h4>
                    </div>
                }
            </Form>

            <div className="flex-1">
                <img src={postman} alt="postman"/>
            </div>

        </div>
    );
};

export default Order;
