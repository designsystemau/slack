const express = require("express");
const app = express();

const {PORT = 3000, LOCAL_ADDRESS = '0.0.0.0', SLACK_INVITATION_LINK = 'https://google.com'} = process.env;

app.use(express.static('public'));

app.get("/", (req, res) => {
	res.redirect(301, SLACK_INVITATION_LINK);
});

app.listen(PORT, LOCAL_ADDRESS, () => {
	console.log(`App listening at http://${LOCAL_ADDRESS}:${PORT}`);
});
