import axios from 'axios'

//Upload image
const uploadFileHandler = async (
	e,
	folder = null,
	setUploading,
	prevImages,
	setImages,
	multiple = true
) => {
	const formData = new FormData()
	if (multiple) {
		const files = e

		for (let i = 0; i < files.length; i++) {
			formData.append('imagesUp', files[i])
		}
	} else {
		formData.append('imagesUp', e.target.files[0])
	}

	setUploading(true)

	try {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
				Folder: folder,
			},
		}

		const { data } = await axios.post('/api/upload', formData, config)

		multiple ? setImages(prevImages.concat(data.data)) : setImages(data.data[0])
		setUploading(false)
	} catch (error) {
		console.error(error)
		setUploading(false)
	}
}

export const uploadEditorFileHandler = async file => {
	const formData = new FormData()
	formData.append('imagesUp', file)

	try {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
				Folder: 'editor',
			},
		}

		const { data } = await axios.post('/api/upload', formData, config)

		return data.data
	} catch (error) {
		console.error(error)
	}
}

/* export const uploadEditorFileHandler = file => {
	const formData = new FormData()
	formData.append('imagesUp', file)

	const config = {
		headers: {
			'Content-Type': 'multipart/form-data',
			Folder: 'editor',
		},
	}

	return axios
		.post('/api/upload', formData, config)
		.then(result => {
			return { data: { link: result.data.data[0].path } }
		})
		.catch(error => {
			console.error(error)
			return Promise.reject(error)
		})
} */

export default uploadFileHandler
