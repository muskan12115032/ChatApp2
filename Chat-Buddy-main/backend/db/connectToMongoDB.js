import mongoose from "mongoose";

const connectToMongoDB = async () => {
    const mongoURI = "mongodb+srv://themuskanduwesh:YLziHB1nkCMyXmIM@cluster0.8n4zk.mongodb.net/myDatabase?retryWrites=true&w=majority";

console.log(mongoURI)
    try {
        await mongoose.connect(mongoURI, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectToMongoDB;
