const mongoose = require('mongoose');

const uri = 'mongodb+srv://Abhishek121101:Pulsar220dt@cluster0.jvj3dex.mongodb.net/MyDatabase';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        fetchStudentData();
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

const studentSchema = new mongoose.Schema({
    name: String,
    class: String,
    uid: Number,
    
});

const StudentModel = mongoose.model('Student', studentSchema);

async function fetchStudentData() {
    try {
        const students = await StudentModel.find({}, 'name uid class');
        console.log('Fetched students data:', students);
    } catch (error) {
        console.error('Error fetching students data:', error);
    } finally {
        // Close the MongoDB connection when done
        mongoose.connection.close();
    }
}

// Start the data fetching process
fetchStudentData();
