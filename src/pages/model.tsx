import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from "../components/common/Navbar/Navbar";
import "../components/common/Navbar/Navbar.css";
import "./form.css";
import { useDispatch } from 'react-redux';
import { addItem } from '../features/Slice';
// import { RootState } from '../App/store';

const Form: React.FC = () => {
    const dispatch = useDispatch();
    // const items = useSelector((state: RootState) => state.addItem);

    const [images, setImages] = useState<string[]>(["", "", "", ""]);
    const [fileNames, setFileNames] = useState({
        leftSideShot: '',
        rightSideShot: '',
        headShot: '',
        fullLength: '',
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, fieldName: string, index: number) => {
        const file = event.currentTarget.files?.[0];

        if (file) {
            formik.setFieldValue(fieldName, file);
            setFileNames(prev => ({ ...prev, [fieldName]: file.name }));

            const fileURL = URL.createObjectURL(file);
            setImages(prevImages => {
                const newImages = [...prevImages];
                newImages[index] = fileURL;
                return newImages;
            });

        } else {
            formik.setFieldValue(fieldName, null);
            setFileNames(prev => ({ ...prev, [fieldName]: '' }));
            setImages(prevImages => {
                const newImages = [...prevImages];
                newImages[index] = "";
                return newImages;
            });
        }
    };

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            number: '',
            dob: '',
            gender: '',
            height: '',
            portfolioLink: '',
            address: '',
            instagramHandle: '',
            profession: '',
            about: '',
            leftSideShot: '' as string | null,
            rightSideShot: '' as string | null,
            headShot: '' as string | null,
            fullLength: '' as string | null,
            privacyNotice: false,
            ageConsent: false,
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            number: Yup.string().required('Required'),
            dob: Yup.date().required('Required'),
            gender: Yup.string().required('Required'),
            height: Yup.number().required('Required'),
            portfolioLink: Yup.string().url('Invalid URL'),
            address: Yup.string().required('Required'),
            instagramHandle: Yup.string(),
            profession: Yup.string().required('Required'),
            about: Yup.string().max(200, 'Must be 200 characters or less'),
            privacyNotice: Yup.boolean().oneOf([true], 'Required'),
            ageConsent: Yup.boolean().oneOf([true], 'Required'),
        }),
        onSubmit: (values) => {
            const newNote = {
                fullName: values.fullName,
                email: values.email,
                number: values.number,
                dob: values.dob,
                gender: values.gender,
                height: values.height,
                portfolioLink: values.portfolioLink,
                address: values.address,
                instagramHandle: values.instagramHandle,
                profession: values.profession,
                about: values.about,
                leftSideShot: values.leftSideShot,
                rightSideShot: values.rightSideShot,
                headShot: values.headShot,
                fullLength: values.fullLength,
                privacyNotice: values.privacyNotice,
                ageConsent: values.ageConsent,
            };
            console.log(newNote);
            dispatch(addItem(newNote));
        },
    });

    return (
        <>
            <Navbar />
            <form onSubmit={formik.handleSubmit} className="form-container">
                <header className="flex justify-center items-center space-x-4">
                    <div>
                        <h1 className=" text-9xl font-bodoni-moda">S2</h1>
                    </div>
                    <div className="">
                        <div className='text-left'>
                            <h1 className="  text-5xl font-bodoni-moda">TALENTS & EVENTS</h1>
                            <h2 className=" text-5xl font-bold text-red-500 font-inria-serif ">BECOME A MODEL</h2>
                            <hr className="border-red-500 ml-2 w-" style={{ borderTopWidth: '3px' }} />
                        </div>
                    </div>
                </header>
                <div className='flex items-center max-[834px]:flex-col-reverse'>
                    <div className='w-full min-[834px]:w-4/5'>
                        <div className='w-full'>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fullName}
                                placeholder="Enter Your Full Name"
                            />
                        </div>
                        {formik.touched.fullName && formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null}
                        <div className='w-full'>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder="Enter Your Email"
                            />
                        </div>
                        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                        <div className='w-full'>
                            <input
                                id="number"
                                name="number"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.number}
                                placeholder="Enter Your Number"
                            />
                        </div>
                        {formik.touched.number && formik.errors.number ? <div>{formik.errors.number}</div> : null}

                        <div className="date-input-container w-full">
                            <div className="date-input-wrapper">
                                <input
                                    type="date"
                                    id="dob"
                                    name="dob"
                                    className="date-input-field"
                                    placeholder='Enter Your Dob'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.dob}
                                />
                                <span className="date-input-icon">&#x1F4C5;</span>
                            </div>
                        </div>
                        {formik.touched.dob && formik.errors.dob ? <div>{formik.errors.dob}</div> : null}

                        <div className='gender w-2/4' style={{ display: "flex" }}>
                            <h2>Gender</h2>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.gender === 'Male'}
                                    className='mr-2'
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.gender === 'Female'}
                                    className='mr-2'
                                />
                                Female
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Others"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.gender === 'Others'}
                                    className='mr-2'
                                />
                                Others
                            </label>
                        </div>
                        {formik.touched.gender && formik.errors.gender ? <div>{formik.errors.gender}</div> : null}
                        <div className='w-full'>
                            <input
                                id="height"
                                name="height"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.height}
                                placeholder="Height (cm)"
                            />
                            {formik.touched.height && formik.errors.height ? <div>{formik.errors.height}</div> : null}
                        </div>
                        <div className='w-full'>
                            <input
                                id="portfolioLink"
                                name="portfolioLink"
                                type="url"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.portfolioLink}
                                placeholder="Portfolio Link"
                            />
                        </div>
                        {formik.touched.portfolioLink && formik.errors.portfolioLink ? <div>{formik.errors.portfolioLink}</div> : null}
                        <div className='w-full'>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.address}
                                placeholder="Full Address"
                            />
                        </div>
                        {formik.touched.address && formik.errors.address ? <div>{formik.errors.address}</div> : null}
                        <div className='w-full'>
                            <input
                                id="instagramHandle"
                                name="instagramHandle"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.instagramHandle}
                                placeholder="Instagram Handle"
                            />
                        </div>
                        {formik.touched.instagramHandle && formik.errors.instagramHandle ? <div>{formik.errors.instagramHandle}</div> : null}
                        <div className='w-full'>
                            <input
                                id="profession"
                                name="profession"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.profession}
                                placeholder="Current Profession"
                            />
                        </div>
                        {formik.touched.profession && formik.errors.profession ? <div>{formik.errors.profession}</div> : null}
                        <div className='w-full'>
                            <textarea
                                id="about"
                                name="about"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.about}
                                placeholder="About You"
                                maxLength={200}
                            />
                        </div>
                    </div>
                    <div className="container max-[834px]:w-full min-[834px]:w-1/2 mx-auto p-5">
                        <div className="grid max-[834px]:grid-cols-2 max-[1024px]:grid-cols-1 lg:grid-cols-2 gap-5">
                            {images.map((src, index) => (
                                <div key={index} className="relative w-full h-1/4 pb-[100%] bg-gray-400">
                                    <img src={src} alt={`model-${index}`} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {formik.touched.about && formik.errors.about ? <div>{formik.errors.about}</div> : null}
                <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-12">
                    <div>
                        <label className="block text-start px-7 ">
                            Left SIDE SHOT
                        </label>
                        <div className="min-[300px]:m-0 ml-3 center px-8 ">
                            <input
                                id="leftSideShot"
                                name="leftSideShot"
                                type="file"
                                onChange={(event) => handleFileChange(event, 'leftSideShot', 0)}
                                className='w-3/5'
                            />
                            <span>{fileNames.leftSideShot || ''}</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-start px-7">
                            Right SIDE SHOT
                        </label>
                        <div className=" min-[300px]:m-0 center px-8">
                            <input
                                id="rightSideShot"
                                name="rightSideShot"
                                type="file"
                                onChange={(event) => handleFileChange(event, 'rightSideShot', 1)}
                                className='w-3/5'
                            />
                            <span>{fileNames.rightSideShot || ''}</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-start px-7">
                            Head SHOT
                        </label>
                        <div className=" min-[300px]:m-0 center px-8">
                            <input
                                id="headShot"
                                name="headShot"
                                type="file"
                                onChange={(event) => handleFileChange(event, 'headShot', 2)}
                                className='w-3/5'
                            />
                            <span>{fileNames.headShot || ''}</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-start px-7">
                            Full Length
                        </label>
                        <div className=" min-[300px]:m-0  center px-8">
                            <input
                                id="fullLength"
                                name="fullLength"
                                type="file"
                                onChange={(event) => handleFileChange(event, 'fullLength', 3)}
                                className='w-3/5'
                            />
                            <span>{fileNames.fullLength || ''}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <label>
                        <input
                            id="privacyNotice"
                            name="privacyNotice"
                            type="checkbox"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.privacyNotice}
                            className='mx-3 rounded-md '
                        />
                        By submitting, you agree that you have read our privacy notice
                    </label>
                    {formik.touched.privacyNotice && formik.errors.privacyNotice ? <div>{formik.errors.privacyNotice}</div> : null}
                </div>

                <div>
                    <label>
                        <input
                            id="ageConsent"
                            name="ageConsent"
                            type="checkbox"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.ageConsent}
                            className='mx-3 rounded-md'
                        />
                        By submitting, you agree that you are 16 years old and older or have sought parent/guardian/career approval first
                    </label>
                    {formik.touched.ageConsent && formik.errors.ageConsent ? <div>{formik.errors.ageConsent}</div> : null}
                </div>

                <button className='bg-black text-white w-1/2 m-auto py-1 mt-5' type="submit">Submit</button>
            </form>
        </>
    );
};

export default Form;
