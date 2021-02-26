import React from 'react'
import Head from 'next/head'
import Select from 'react-select';
import axios from 'axios'
import { connect } from '../store/index'
import { toggleAddPlace } from '../actions/uiElements'
import image from 'next/image';


const mapStateToProps = (state) => {
    return { addPlaceModal: state.uiElements.addPlaceModal }
}

function addPlace(props) {
    const { addPlaceModal, toggleAddPlace } = props

    const [categories, setCategories] = React.useState([])
    const [tags, setTags] = React.useState([])
    const [selectedCategories, setSelectedCategories] = React.useState([])
    const [selectedTags, setSelectedTags] = React.useState([])
    const [uploadedImages, setUploadedImages] = React.useState([])

    const [form, setForm] = React.useState({
        title: '',
        abb_title: '',
        location: '',
        operating_mode: '',
        description: '',
        tel: '',
        site: '',
    })

    React.useEffect(() => {
        const getData = async () => {
            const reqCategories = await axios(`${process.env.API_URL}/categories`);
            const categories = reqCategories.data.data

            const formatedCategories = categories.map(item => {
                item.value = item.title;
                item.label = item.title;
                return item
            })

            const reqTags = await axios(`${process.env.API_URL}/tags`);
            const tags = reqTags.data.data

            const formatedTags = tags.map(item => {
                item.value = item.title;
                item.label = item.title;
                return item
            })

            setCategories(formatedCategories);
            setTags(formatedTags);
        }
        getData();
    }, [])

    const formHandler = () => (e) => {
        e.preventDefault()
        const { value, name } = e.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSelectCat = (newValue) => {
        setSelectedCategories(newValue)
    };

    const handleSelectTags = (newValue) => {
        setSelectedTags(newValue)
    };

    const deleteImage = (id) => (e) => {
        e.preventDefault()
        const newImages = uploadedImages.filter(file => file.id !== id)
        setUploadedImages(newImages)
    }

    const uploadImagesHandle = () => (e) => {
        e.preventDefault()
        const { files } = e.target
        const file = files[0]
        const reader = new FileReader();

        reader.onloadend = () => {
            const uploadFile = { url: reader.result, file, id: Math.random() }
            setUploadedImages([...uploadedImages, uploadFile])
        }
        reader.readAsDataURL(file)
    }

    const submitForm = async () => {
        try {
            const newForm = form
            newForm.images = uploadedImages.map(({ url, ...file }) => file)
            newForm.categories = selectedCategories.map(({ id }) => id)
            newForm.tags = selectedTags.map(({ id }) => id)
    
            console.log(newForm)
            // const res = await axios(`${process.env.API_URL}/places`)
            // console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    if (!addPlaceModal) {
        return null;
    }

    return (
        <>
            <Head>
                <title>Добавить место</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="add-place">
                <div className="form">
                    <div className="back-btn" onClick={() => toggleAddPlace()}>
                        +
                    </div>
                    <div className="title">
                        Добавить место
                    </div>
                    <input type="text" onChange={formHandler()} value={form.title} name='title' className="input" placeholder='Полное название' />
                    <input type="text" onChange={formHandler()} value={form.abb_title} name='abb_title' className="input" placeholder='Сокращенное название' />
                    <Select
                        closeMenuOnSelect={false}
                        isMulti
                        options={categories}
                        placeholder="Выберите категорию"
                        className="input input-list"
                        onChange={(e) => handleSelectCat(e)}
                    />
                    <input type="phone" onChange={formHandler()} value={form.tel} name='tel' className="input" placeholder='Телефон' />
                    <input type="text" onChange={formHandler()} value={form.site} name='site' className="input" placeholder='Сайт' />
                    <input type="text" onChange={formHandler()} value={form.operating_mode} name='operating_mode' className="input" placeholder='Режим работы' />
                    <input type="text" onChange={formHandler()} value={form.location} name='location' className="input" placeholder='Адресс' />
                    <Select
                        closeMenuOnSelect={false}
                        isMulti
                        options={tags}
                        placeholder="Выберите теги"
                        className="input input-list"
                        onChange={(e) => handleSelectTags(e)}
                    />
                    <textarea type="textarea" onChange={formHandler()} value={form.description} name='description' className="input" placeholder='Описание' />
                    <div className="photo-area">
                        <div className="head">
                            Фотографии
                            <div className="add-photo-btn" onClick={(e) => e.target.nextElementSibling.click()}>
                                Загрузить
                            </div>
                            <input type='file' name='images' onChange={uploadImagesHandle()} className='file-input' />
                        </div>
                        <div className="photos">
                            {uploadedImages.map(({ id, url }) => (
                                <div className="img-cont" key={id}>
                                    <img src={url} className='photo-for-form' />
                                    <div className="delete" onClick={deleteImage(id)} >
                                        <div className="value">+</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="btn-reg" name="images" onClick={(e) => submitForm(e)}>
                        Добавить
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, { toggleAddPlace })(addPlace)