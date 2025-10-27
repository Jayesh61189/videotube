import { asyncHandler } from "../utils/asyncHandler.js";

const signupController = asyncHandler(async (req, res, next) => {
  try {
    res.send("signup");
  } catch (error) {
    console.error("Error in signup controller :", error);
  }
});

const signinController = asyncHandler(async (req, res, next) => {
  try {
    res.send("signin");
  } catch (error) {
    console.error("Error in signin controller :", error);
  }
});

export { signupController, signinController };
