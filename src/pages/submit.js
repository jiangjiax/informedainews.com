import clsx from 'clsx';
import Layout from '@theme/Layout';
import React, { useState } from 'react';
import axios from 'axios';
import Translate, {translate} from '@docusaurus/Translate';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const IndexTitle =translate({
    message: 'AI-Curated, Informed Choices',
})

const tagline = translate({
    id: 'homepage.tagline',
    message: '"Informed AI News" is an AI-curated publications aggregation platform, precisely selecting and aggregating the most important global news and information. Its purpose is to help you eliminate information gaps and break through the limitations of the information cocoon room. Experience it now and embark on a new chapter of intelligent news reading!'
})

export default function Submit() {
    const [formData, setFormData] = useState({
        toolName: '',
        websiteUrl: '',
        email: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://informedainews.2921238406.workers.dev/submit', formData);
            if (response.status === 200) {
                alert('Form submitted successfully!');
                setFormData({
                    toolName: '',
                    websiteUrl: '',
                    email: '',
                    description: ''
                });
            } else {
                alert('There was an error submitting the form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form: ', error);
            alert('There was an error submitting the form. Please try again.');
        }
    };

    return (
        <Layout
            title={IndexTitle}
            description={tagline}>
            <section className="pt-10 pb-5">
                <h1 className="text-center text-5xl font-bold text-blue-700 dark:text-white"><Translate>Submit your tool to get traffic.</Translate></h1>
                <p className="text-center text-lg">
                    <Translate>Submit your tool to get traffic.</Translate>
                </p>
                <div className="flex justify-center bg-transparent">
                    <div className="w-full max-w-md">
                        <form onSubmit={handleSubmit} className="bg-gray-100 shadow-lg rounded-lg px-10 pt-8 pb-10 mb-4">
                            <div className="mb-6">
                                <label htmlFor="toolName" className="block text-gray-700 text-sm font-bold mb-2">Tool Name:</label>
                                <input
                                    type="text"
                                    id="toolName"
                                    name="toolName"
                                    value={formData.toolName}
                                    onChange={handleChange}
                                    required
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="websiteUrl" className="block text-gray-700 text-sm font-bold mb-2">Website URL:</label>
                                <input
                                    type="url"
                                    id="websiteUrl"
                                    name="websiteUrl"
                                    value={formData.websiteUrl}
                                    onChange={handleChange}
                                    required
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40 resize-none"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline border-none"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
}