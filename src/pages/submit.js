import clsx from 'clsx';
import Layout from '@theme/Layout';
import React, { useState } from 'react';
import axios from 'axios';
import Translate, {translate} from '@docusaurus/Translate';
import Swal from 'sweetalert2';

const IndexTitle = translate({
    message: 'Submit',
})

const tagline = translate({
    message: 'Submit your tool to get traffic'
})

const add = translate({
    message: 'Add'
})

const addspan = translate({
    message: ' <a href="https://informedainews.com" title="Informed AI News">Informed AI News</a> '
})

const addend = translate({
    message: 'to your website footer as a friendly link, and you can submit your website for free.'
})

export default function Submit() {
    const [formData, setFormData] = useState({
        toolName: '',
        websiteUrl: '',
        email: '',
        description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await axios.post('https://informedainews.2921238406.workers.dev/submit', formData);
            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Form submitted successfully!',
                });
                setFormData({
                    toolName: '',
                    websiteUrl: '',
                    email: '',
                    description: ''
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'There was an error submitting the form. Please try again.',
                });
            }
        } catch (error) {
            console.error('Error submitting form: ', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There was an error submitting the form. Please try again.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout
            title={IndexTitle}
            description={tagline}>
            <section className="pt-10 pb-5 w-5/6 mx-auto">
                <h1 className="text-center text-5xl font-bold dark:text-white"><Translate>Submit your tool to get traffic</Translate></h1>
                <p className="text-center text-lg text-sky-500 dark:text-sky-300 font-bold">
                {add}
                <span className="text-orange-500">{addspan}</span>
                {addend}
                </p>
                <div className="flex justify-center bg-transparent">
                    <div className="w-full max-w-md">
                        <form onSubmit={handleSubmit} className="bg-gray-100 shadow-lg rounded-lg px-10 pt-8 pb-10 mb-4">
                            <div className="mb-6">
                                <label htmlFor="toolName" className="block text-gray-700 text-sm font-bold mb-2"><Translate>Tool Name:</Translate></label>
                                <input
                                    type="text"
                                    id="toolName"
                                    name="toolName"
                                    value={formData.toolName}
                                    onChange={handleChange}
                                    required
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="websiteUrl" className="block text-gray-700 text-sm font-bold mb-2"><Translate>Website URL:</Translate></label>
                                <input
                                    type="text"
                                    id="websiteUrl"
                                    name="websiteUrl"
                                    value={formData.websiteUrl}
                                    onChange={handleChange}
                                    required
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2"><Translate>Email:</Translate></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2"><Translate>Description:</Translate></label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40 resize-none bg-white"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={clsx(
                                        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline border-none",
                                        isSubmitting && "opacity-50 cursor-not-allowed"
                                    )}
                                >
                                    {isSubmitting ? <Translate>Submitting...</Translate> : <Translate>Submit</Translate>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
}