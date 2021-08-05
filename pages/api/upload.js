const nextConnect = require('next-connect');
const multer = require('multer');
const upload = multer();

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(500).json({ error: `Unexpected error: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('avatar'));

apiRoute.post((req, res) => {
  console.log('req.body', req.body);
  console.log('req.file.buffer.toString()', req.file.buffer.toString());
  res.status(200).json({ body: req.body, file: req.file.buffer.toString() });
});

export default apiRoute;
