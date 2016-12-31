const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://tempsittinguser:tempsittinguser123@ds145208.mlab.com:45208/heroku_s4j918sv',
  port: process.env.PORT || 8000,
};

export default config;
