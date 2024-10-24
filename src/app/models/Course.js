const mongoose = require('mongoose');

// lib mongoose-slug-generator đang bị lỗi version nên chuyển qua dùng slugify
const slugify = require('slugify');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String, maxLength: 255 },
    slug: { type: String, unique: true }
}, { 
    timestamps: true 
});

// timestamps : tự tạo createAt & updateAt
// unique : khi tạo slug thì không cho phép tạo 2 slag giống nhau

Course.pre('save', function(next) {
    this.slug = slugify(this.name, { lower: true, strict: true });
    next();
});

module.exports = mongoose.model('Course', Course);
