class ContactController {
  index(request, response) {
    response.send("Send from contact controlller");
  }

  show() {}

  store() {}

  update() {}

  delete() {}
}

module.exports = new ContactController();
