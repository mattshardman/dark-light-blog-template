const { json } = require('micro');
const Mailchimp = require('mailchimp-api-v3');
const dotEnv = require('dotenv');

dotEnv.config();

const { API_KEY } = process.env;

const mailchimp = new Mailchimp(API_KEY);

module.exports = async (req, res) => {
  const request = await json(req);
  const { name, email } = request;
  try {
    await mailchimp.post('/lists/57351c6acf/members', {
      email_address: email,
      FNAME: name,
      status: 'subscribed',
    });

    await res.end('true');
  } catch (err) {
    res.end('false');
  }
};
