export const asyncHandler = (requsetHandler) => {
  return (req, res, next) => {
    Promise.all(requsetHandler(req, res, next)).catch((err) => next(err));
  };
};
