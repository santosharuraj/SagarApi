import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
}, {
    timestamps: true,
});

const userModal = new mongoose.model("User", schema);

export default userModal;