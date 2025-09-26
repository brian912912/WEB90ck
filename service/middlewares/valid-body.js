const validBodyRequest = (schema) => async (req, res, next) => {
  try {
    const parsed = await schema.parseAsync(req.body);
    req.body = parsed;
    next();
  } catch (err) {
    const message = err?.errors?.map((e) => e.message).join(", ") || "Invalid body";
    return res.status(400).json({ message });
  }
};

export default validBodyRequest;


