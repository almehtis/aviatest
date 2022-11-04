export const getVisitor = async () => {
  try {
    await fetch("http://localhost:8080/visitor", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => console.log(JSON.stringify(response)));
  } catch (error) {
    console.log(error);
  }
};
