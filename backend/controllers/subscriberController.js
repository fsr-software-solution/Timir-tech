import Subscriber from '../models/Subscriber.js';

// @desc    Subscribe to newsletter
// @route   POST /api/subscribers
// @access  Public
const subscribeNewsletter = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        // Check if already subscribed
        const subscriberExists = await Subscriber.findOne({ email });

        if (subscriberExists) {
            return res.status(400).json({ message: 'This email is already subscribed' });
        }

        const subscriber = await Subscriber.create({ email });

        res.status(201).json({
            message: 'Subscribed successfully',
            subscriber
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all subscribers
// @route   GET /api/subscribers
// @access  Private
const getSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.find({}).sort({ subscribedAt: -1 });
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { subscribeNewsletter, getSubscribers };
