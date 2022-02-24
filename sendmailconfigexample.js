const smtpInfo = {
  auth: {
    user: 'sometestmailforsend@gmail.com',
    pass: 'yourpasswordfortest',
  },
  host: 'smtp.gmail.com',
  secureConnection: true,
  port: 465,
};

const mailsClient = [
  'sometestmailforsend@outlook.com',
  'sometestmailforsend@yahoo.com',
  'sometestmailforsend@gmail.com',
  'sometestmailforsend@yandex.com',
  'sometestmailforsend@mail.ru',
  'sometestmailforsend@protonmail.com',
  'sometestmailforsend@aol.com',
];

const fromMail = 'TestMail <sometestmailforsend@gmail.com>';

module.exports = { smtpInfo, mailsClient, fromMail };
