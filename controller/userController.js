import userModal from "../model/userModal.js";

export const PostAPI = async(req, res) => {
    const { phoneNumber } = req.body;
    const newUser = await userModal(req.body);

    try {
        const mobileExist = await userModal.findOne({ phoneNumber });
        if (mobileExist) {
            return res.status(400).json("Mobile Number already exist");
        }

        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const GetAPI = async(req, res) => {
    const id = req.params.id;

    try {
        const exist = await userModal.findById(id).select("-__v");
        if (!exist) {
            return res.status(400).json("Not exist");
        }

        res.status(201).json(exist);
    } catch (error) {
        res.status(500).json(error);
    }
};