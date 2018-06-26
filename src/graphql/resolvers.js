module.exports = {
    Query: {
        feed: async (parent, args, { models }) => {
            const Feed = await models.Feed.find({})
            console.log(Feed)
            return Feed
        }
    },
    Mutation: {
        createLink: async (parent, { id, description, url }, { models }) => {
            const Feed = await models.Feed.findOne({ url })

            if (Feed) {
                throw new Error('Please provide a unique url ')
            }

            // create a new feed
            const newFeed = new models.Feed({
                description,
                url
            })

            // save the feed
            try {
                await newFeed.save()
            } catch (e) {
                throw new Error('Cannot Save Feed!!!')
            }

            return true
        }
    }
}