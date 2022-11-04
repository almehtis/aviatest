export const insertVisitor = async () => {
  try {
    await fetch("http://localhost:8080/visitor/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 1,
        share: false,
        email: null,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};
