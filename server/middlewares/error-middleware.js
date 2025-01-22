export const notFound = (req, res, next) => {
  const error = new Error(`${req.originalUrl} not found`);
  res.status(404);
  next(error);
};

export const errorHandler = (error, req, res, next) => {
  if (res.headerSent) next(error);

  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error occured" });
};
