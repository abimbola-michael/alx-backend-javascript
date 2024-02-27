class AppController {
  static getHomepage(request, response) {
    // response.statusCode = 200;
    // response.end("Hello Holberton School!");
    response.status(200).send('Hello Holberton School!');
  }
}
export default AppController;
