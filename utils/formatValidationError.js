export default function formatValidationError(err) {
    if (err.name !== "ValidationError") return err.message;

    const formattedErrors = {};

    Object.values(err.errors).forEach((val) => {
        const { message, path } = val;

        if (!formattedErrors[path]) formattedErrors[path] = [];

        formattedErrors[path].push(message);
    });

    // this will return an object like this:
    // {
    //     title: ["Title is required"],
    //     body: ["Body is required"],
    // }

    return formattedErrors;
}
