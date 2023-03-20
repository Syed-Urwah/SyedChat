const Message = require('../Models/Message');

const newMessage = async (req, res) => {
    try {
        const newMsg = new Message({
            conversationId: req.params.conversationId,
            sender: req.user._id,
            text: req.body.text
        })
        newMsg.save();
        res.status(200).json(newMsg);
    } catch (error) {
        res.status(500).json(error)
    }

}

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId
        })
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = { newMessage , getMessages}
