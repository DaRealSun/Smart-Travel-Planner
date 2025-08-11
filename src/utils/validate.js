export const checkValidData = (email, password, name) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,32}$/.test(password);
    const isNameValid = /^[A-Za-z]+([ '-][A-Za-z]+)*$/.test(name);

    if (!isNameValid) return "Name is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (!isEmailValid) return "Email is not valid";

    return null;
};

