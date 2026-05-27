const axios = require("axios");

const env = require("./env");

async function feishu({ subject, text, html }) {
  return axios
    .post(
      env.FEISHU_WEBHOOK,
      {
        msg_type: "text",
        content: {
          text: `${subject}\n${text || html}`
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(res => console.log(JSON.stringify(res.data)))
    .catch(error => console.log(error));
}

module.exports = feishu;
