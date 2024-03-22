"use client"
import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const formRef = useRef();
    const [ form, setForm ] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [ loading, setLoading ] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value})
    }


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send('service_ichp5w6', 'template_01jhvsr', {
            from_name: form.name,
            to_name: 'ceu_site',
            from_email: form.email,
            to_email: 'matheus.henrique4245@gmail.com',
            message: form.message,
        }, 'sHO_KZAwa8AYZbyJg')
            .then(() => {
                setLoading(false);
                alert('Obrigado. Entraremos em contato assim que possivel.')
                setForm({
                    name: '', email: '', message: '',
                })
            }, (err) => {
                setLoading(false)
                console.log(err);
                alert('Something went wrong.')
            })
    }
    return (
        <form
            // @ts-ignore
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
        >
            <label className='flex flex-col'>
                <span>Seu Nome</span>
                <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Qual seu nome?"
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
                <span>Seu Email</span>
                <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Qual seu email?"
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
                <span>Sua menssagem</span>
                <textarea
                    rows={7}
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder="O que você quer nós dizer?"
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
            </label>

            <button
                type='submit'
                className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >
                { loading ? 'Enviando...' : 'Enviar'}
            </button>
        </form>
    )
}

export default ContactForm