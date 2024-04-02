function getData() {
  fetch("../../Server-Side/data.json")
    .then((response) => {
      console.log(response.json());
    })
    .catch((err) => {
      console.log(err);
    });
}
