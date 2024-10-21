const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true }
}, { 
    timestamps: true 
});

// timestamps : tự tạo createAt & updateAt
// unique : khi tạo slug thì không cho phép tạo 2 slag giống nhau

module.exports = mongoose.model('Course', Course);
