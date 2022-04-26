import radio from "./api";

export const getRadios = async () => {
    try {
        const response = await radio.get("/");
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};
