# Recreational Area Finder

This app helps users find areas in the United States where they can partake in recreational activities ranging from boating to camping. It is made out of React/Redux client-side and Ruby on Rails server-side using HTTP to communicate between client and server. The data for the app comes from a government owned external API from [Recreation.gov](ridb.recreation.gov). To get data from the external API, the user will require an API key from the website. The application process for the key is straight forward after registering for an account on the website. After acquiring the API key, set it inside the .env file on the server-side and everything will be set (will have to create a .env file in the main directory of the backend folder).

## Installation and Start Up

1. Fork and clone the repo to the local machine.
2. Once app folder is opened, change directory to the backend folder.
3. Run `bundle install`.
4. Start the server by typing `rails s`.
5. In another terminal window change directory to the frontend folder.
6. Run `npm install`.
7. Start the app by typing `npm start`.

**Note: Both client and server-side will start on port 3000. Change the client-side port to a different port number by creating a .env in the main directory of the frontend folder and insert `PORT=a_Number` in the file replacing a_Number with a 4 digit number.**

## Contributing

Bug reports and pull requests are welcome on [GitHub](https://github.com/Dice-K39/React_Redux_Project).

## License

This app is available as open source under the terms of the MIT License.
