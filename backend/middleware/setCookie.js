const setCookie = (req, res, next) => {
  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 24);

  res.cookie("sessionId", Math.random().toString().substring(2, 10), {
    httpOnly: true,
    secure: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 dia
    expires: expirationDate,
  });

  res.status(200).json({ message: "Inicio de sesion exitoso" });
};

module.exports = setCookie;
