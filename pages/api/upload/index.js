import nextConnect from 'next-connect';
import multer from 'multer';

function checkFileType(file, cb) {
	const filetypes = /jpg|jpeg|png|svg+xml|svg|webp|pjpeg/
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
	const mimetype = filetypes.test(file.mimetype)

	if (!extname && !mimetype) {
		return cb(new Error('Ты можешь загрузить только картинки!'), false)
	}

	return cb(null, true)
}

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
  fileFilter: function (req, file, cb) {
		checkFileType(file, cb)
	}
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array('theFiles'));

apiRoute.post((req, res) => {
  res.status(200).json({ data: 'success' });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};